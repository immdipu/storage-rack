"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { gapi } from "gapi-script";

interface GoogleDriveContextProps {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
  getStorageQuota: () => any;
  loading: boolean;
  getRecentsFiles: () => any;
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

  const signOut = () => {
    gapi.auth2.getAuthInstance().signOut();
    setIsSignedIn(false);
  };

  const getRecentsFiles = () => {
    return gapi.client.drive.files.list({
      pageSize: 10,
      fields:
        "nextPageToken, files(id, name, size, thumbnailLink, hasThumbnail, fileExtension, starred, createdTime, owners ) ",
      orderBy: "modifiedTime desc",
    });
  };

  const getSingleFile = (fileId: string) => {
    return gapi.client.drive.files.get({
      fileId: fileId,
      fields: "id, name, mimeType, webViewLink, iconLink",
    });
  };

  return (
    <GoogleDriveContext.Provider
      value={{
        isSignedIn,
        signIn,
        getStorageQuota,
        loading,
        signOut,
        getRecentsFiles,
      }}
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
