"use client";
import React from "react";
import { useGDrive } from "@/context/GoogleDriveContext";
import { ClipLoader } from "react-spinners";

const ConnectGDrive = () => {
  const { signIn, loading } = useGDrive();
  return (
    <button
      onClick={signIn}
      className="flex  w-full hover:border-neutral-400 hover:text-blue-dark h-14 text-blue items-center py-2 px-4 rounded-xl border transition duration-300"
    >
      {!loading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          id="google-drive"
          className="size-7 mr-2"
        >
          <path fill="#FFC107" d="M10.667 11H16L10.667 1H5.333z"></path>
          <path fill="#2196F3" d="m4.952 11-2.285 4H13.5l2.5-4z"></path>
          <path
            fill="#4CAF50"
            d="M5.333 1 0 10.333 2.667 15l5.241-9.172z"
          ></path>
        </svg>
      )}
      {loading && (
        <ClipLoader
          color="#FFC107"
          loading={loading}
          size={20}
          className="mr-1"
        />
      )}
      <span className="pr-1">{loading ? "Connecting" : "Connect"}</span>
      Google Drive
    </button>
  );
};

export default ConnectGDrive;
