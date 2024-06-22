"use client";
import React, { useEffect, useState } from "react";
import GaugeCircle from "../GaugeCircle/GaugeCircle";

const UsageCard = () => {
  const [value, setValue] = useState(20);

  return (
    <div>
      <GaugeCircle
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      />
    </div>
  );
};

export default UsageCard;
