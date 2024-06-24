/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import GaugeCircle from "../GaugeCircle/GaugeCircle";
import { useGDrive } from "@/context/GoogleDriveContext";
import { bytesToGB } from "@/lib/utils";
import ConnectGDrive from "../Buttons/ConnectGDrive";

const GDriveUsageCard = () => {
  const [memory, setMemory] = useState({
    total: 0,
    usage: 0,
  });
  const [value, setValue] = useState(0);

  const { getStorageQuota, isSignedIn } = useGDrive();

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
    </div>
  );
};

export default GDriveUsageCard;
