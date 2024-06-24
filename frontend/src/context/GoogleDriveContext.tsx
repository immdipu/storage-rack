"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { gapi } from "gapi-script";

interface GoogleDriveContextProps {
  isSignedIn: boolean;
  signIn: () => void;
  getStorageQuota: () => any;
  loading: boolean;
}

const GoogleDriveContext = createContext<GoogleDriveContextProps | undefined>(
  undefined
);

const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];

const SCOPES = "https://www.googleapis.com/auth/drive";

const GoogleDriveContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initClient = () => {
      setLoading(true);
      gapi.client
        .init({
          apiKey: process.env.NEXT_PUBLIC_API_KEY,
          clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          setIsSignedIn(authInstance.isSignedIn.get());
          authInstance.isSignedIn.listen(setIsSignedIn);
          setLoading(false);
        });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const signIn = () => {
    setLoading(true);
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        setIsSignedIn(true);
        setLoading(false);
      });
  };

  const getStorageQuota = () => {
    return gapi.client.drive.about.get({
      fields: "storageQuota",
    });
  };

  return (
    <GoogleDriveContext.Provider
      value={{ isSignedIn, signIn, getStorageQuota, loading }}
    >
      {children}
    </GoogleDriveContext.Provider>
  );
};

export const useGDrive = () => {
  const googleDriveContext = useContext(GoogleDriveContext);
  if (!googleDriveContext) {
    throw new Error(
      "useGoogleDriveContext must be used within GoogleDriveContextProvider"
    );
  }

  return googleDriveContext;
};

export default GoogleDriveContextProvider;
