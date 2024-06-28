"use client";
import React from "react";
import { useGDrive } from "@/context/GoogleDriveContext";
import { ClipLoader } from "react-spinners";
import GoogleDriveIcon from "@/icons/GoogleDriveIcon";
import { useOneDrive } from "@/context/OneDriveContext";

const ConnectOneDrive = () => {
  const { signIn, loading } = useOneDrive();
  return (
    <button
      onClick={signIn}
      className="flex  w-full hover:border-neutral-400 hover:text-blue-dark h-14 text-blue items-center py-2 px-4 rounded-xl border transition duration-300"
    >
      {!loading && <GoogleDriveIcon className="size-7 mr-2" />}
      {loading && (
        <ClipLoader
          color="#FFC107"
          loading={loading}
          size={20}
          className="mr-1"
        />
      )}
      <span className="pr-1">{loading ? "Connecting" : "Connect"}</span>
      One Drive
    </button>
  );
};

export default ConnectOneDrive;
