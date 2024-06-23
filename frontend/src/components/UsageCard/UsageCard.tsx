"use client";
import React, { useEffect, useState } from "react";
import GaugeCircle from "../GaugeCircle/GaugeCircle";
import { useGDrive } from "@/context/GoogleDriveContext";

const UsageCard = () => {
  const [value, setValue] = useState(0);
  const { getStorageQuota, isSignedIn } = useGDrive();

  useEffect(() => {
    if (isSignedIn) {
      getStorageQuota().then((response: any) => {
        console.log("quota", response);
      });
    }
  }, [isSignedIn]);

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
          <span className="text-blue-dark font-medium mx-1">77</span>GB{" "}
          <span className="text-blue-dark font-medium">/</span>{" "}
          <span className="text-blue-dark font-medium mx-1">1</span>TB
        </p>
        <p className="text-sm font-light text-gray-dark mt-1">
          Available storage
        </p>
      </section>
    </div>
  );
};

export default UsageCard;
