/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import GaugeCircle from "../GaugeCircle/GaugeCircle";
import { useGDrive } from "@/context/GoogleDriveContext";
import { bytesToGB } from "@/lib/utils";
import ConnectGDrive from "../Buttons/ConnectGDrive";
import GoogleDriveIcon from "@/icons/GoogleDriveIcon";
import { LogOut } from "lucide-react";

const GDriveUsageCard = () => {
  const [memory, setMemory] = useState({
    total: 0,
    usage: 0,
  });
  const [value, setValue] = useState(0);

  const { getStorageQuota, isSignedIn, signOut, getRecentsFiles } = useGDrive();

  useEffect(() => {
    if (isSignedIn) {
      getStorageQuota().then((response: any) => {
        const storage = response?.result.storageQuota;

        const total = bytesToGB(storage?.limit);
        const usage = bytesToGB(storage?.usage);

        const value = parseFloat(((usage / total) * 100).toFixed(2));
        setValue(value);
        setMemory({ total, usage });
      });
    }
  }, [isSignedIn]);

  if (!isSignedIn) {
    return <ConnectGDrive />;
  }

  return (
    <div className="bg-secondary rounded-3xl  grid place-content-center py-8">
      <div className="flex justify-between w-full  pb-4 pt-1 -mt-6 left-0 -ml-5">
        <div className="flex items-center gap-2 ">
          <GoogleDriveIcon className="size-4" />
          <h3 className="font-medium text-blue-dark">Google Drive</h3>
          <button
            onClick={signOut}
            className=" group translate-x-14 rounded-full p-1 "
          >
            <LogOut className="size-4 text-gray-dark group-hover:text-black" />
          </button>
        </div>
      </div>

      <GaugeCircle
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor="#00A292"
        gaugeSecondaryColor="#d2efed"
      />
      <section className="mt-4 -ml-6">
        <p className="text-gra">
          <span className="text-blue-dark font-medium mx-1">
            {memory.usage}
          </span>
          GB <span className="text-blue-dark font-medium">/</span>{" "}
          <span className="text-blue-dark font-medium mx-1">
            {memory.total}
          </span>
          GB
        </p>
        <p className="text-sm font-light text-gray-dark mt-1">
          Available storage
        </p>
      </section>
      <div>
        <button
          onClick={() => {
            getRecentsFiles().then((response: any) => {
              console.log(response.result.files);
            });
          }}
          className="bg-blue-dark text-white font-semibold rounded-lg px-4 py-2 mt-4"
        >
          Upgrade Storage
        </button>
      </div>
    </div>
  );
};

export default GDriveUsageCard;
