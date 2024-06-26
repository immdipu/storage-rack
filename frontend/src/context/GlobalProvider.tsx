"use client";
import React, { SetStateAction, createContext, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/Sidebar/Sidebar";
import dynamic from "next/dynamic";
const GoogleDriveContextProvider = dynamic(
  () => import("@/context/GoogleDriveContext")
);

const OneDriveContextProvider = dynamic(
  () => import("@/context/OneDriveContext")
);

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  showSider: boolean;
  setShowSidebar: React.Dispatch<SetStateAction<boolean>>;
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

const queryClient = new QueryClient();
const persistor = persistStore(store);

const getSearchResult = async (query: string) => {};
const Providers = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showSider, setShowSidebar] = useState(false);

  const searchContextValue: SearchContextProps = {
    searchTerm,
    setSearchTerm,
    showSider,
    setShowSidebar,
  };

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <OneDriveContextProvider>
          <PersistGate loading={null} persistor={persistor}>
            <SearchContext.Provider value={searchContextValue}>
              <GoogleDriveContextProvider>
                <GoogleOAuthProvider clientId="999403015017-rodh8011hs8r1l0tjlakeidj4vnu1u53.apps.googleusercontent.com">
                  <Toaster />
                  <Sidebar />
                  {children}
                </GoogleOAuthProvider>
              </GoogleDriveContextProvider>
            </SearchContext.Provider>
          </PersistGate>
        </OneDriveContextProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default Providers;
