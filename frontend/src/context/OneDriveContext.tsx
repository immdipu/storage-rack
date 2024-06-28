"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { PublicClientApplication, AccountInfo } from "@azure/msal-browser";
import { Client } from "@microsoft/microsoft-graph-client";

interface OneDriveContextProps {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
  getStorageQuota: () => Promise<any>;
  uploadFile: (file: File) => Promise<any>;
  deleteFile: (fileId: string) => Promise<void>;
  loading: boolean;
}

const OneDriveContext = createContext<OneDriveContextProps | undefined>(
  undefined
);

const CLIENT_ID = process.env.NEXT_PUBLIC_ONEDRIVE_CLIENT_ID as string;
const AUTHORITY = "https://login.microsoftonline.com/common";
const REDIRECT_URI = process.env.NEXT_PUBLIC_ONEDRIVE_REDIRECT_URI as string;

const msalConfig = {
  auth: {
    clientId: CLIENT_ID,
    authority: AUTHORITY,
    redirectUri: REDIRECT_URI,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const OneDriveContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<AccountInfo | null>(null);
  const [graphClient, setGraphClient] = useState<Client | null>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        await msalInstance.initialize();
        const accounts = msalInstance.getAllAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          initializeGraphClient(accounts[0]);
          setIsSignedIn(true);
        }
      } catch (error) {
        console.error("MSAL initialization error:", error);
      }
      setLoading(false);
    };
    initialize();
  }, []);

  const initializeGraphClient = (account: AccountInfo) => {
    const client = Client.initWithMiddleware({
      authProvider: {
        getAccessToken: async () => {
          const response = await msalInstance.acquireTokenSilent({
            scopes: ["Files.ReadWrite", "User.Read"],
            account,
          });
          console.log("Access token:", response.accessToken);
          return response.accessToken;
        },
      },
    });
    setGraphClient(client);
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await msalInstance.loginPopup({
        scopes: ["Files.ReadWrite", "User.Read"],
      });
      setAccount(response.account);
      initializeGraphClient(response.account);
      setIsSignedIn(true);
    } catch (error) {
      console.error("Login error:", error);
    }
    setLoading(false);
  };

  const signOut = () => {
    msalInstance.logoutPopup();
    setIsSignedIn(false);
    setGraphClient(null);
    setAccount(null);
  };

  const getStorageQuota = async () => {
    if (graphClient) {
      const response = await graphClient.api("/me/drive").get();
      return response.quota;
    }
    return null;
  };

  const uploadFile = async (file: File) => {
    if (graphClient) {
      const response = await graphClient
        .api(`/me/drive/root:/Documents/${file.name}:/content`)
        .put(file);
      return response;
    }
    return null;
  };

  const deleteFile = async (fileId: string) => {
    if (graphClient) {
      await graphClient.api(`/me/drive/items/${fileId}`).delete();
    }
  };

  return (
    <OneDriveContext.Provider
      value={{
        isSignedIn,
        signIn,
        signOut,
        getStorageQuota,
        uploadFile,
        deleteFile,
        loading,
      }}
    >
      {children}
    </OneDriveContext.Provider>
  );
};

export const useOneDrive = () => {
  const context = useContext(OneDriveContext);
  if (!context) {
    throw new Error("useOneDrive must be used within OneDriveContextProvider");
  }
  return context;
};

export default OneDriveContextProvider;
