import React, { createContext, useContext, useEffect, useState } from "react";
import { gapi } from "gapi-script";

interface GoogleDriveContextProps {
  isSignedIn: boolean;
  signIn: () => void;
}

const GoogleDriveContext = createContext<GoogleDriveContextProps | null>(null);
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];

const SCOPES = "https://www.googleapis.com/auth/drive";

export const GoogleDriveContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const signIn = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  return (
    <GoogleDriveContext.Provider value={{ isSignedIn, signIn }}>
      {children}
    </GoogleDriveContext.Provider>
  );
};

export const useGoogleDriveContext = () => {
  if (!GoogleDriveContext)
    throw new Error(
      "useGoogleDriveContext must be used within a GoogleDriveContextProvider"
    );
  return useContext(GoogleDriveContext);
};
