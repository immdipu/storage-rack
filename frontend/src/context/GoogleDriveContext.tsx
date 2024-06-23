"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { gapi } from "gapi-script";

interface GoogleDriveContextProps {
  isSignedIn: boolean;
  signIn: () => void;
  getStorageQuota: () => any;
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

  useEffect(() => {
    const initClient = () => {
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
        });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const signIn = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const getStorageQuota = () => {
    return gapi.client.drive.about
      .get({
        fields: "storageQuota",
      })
      .then((response: any) => {
        console.log("storage quota", response.result.storageQuota);
      });
  };

  return (
    <GoogleDriveContext.Provider
      value={{ isSignedIn, signIn, getStorageQuota }}
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
