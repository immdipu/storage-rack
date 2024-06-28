import UserProfileDropdown from "@/components/userProfileDropdown/UserProfileDropdown";
import React from "react";
import GDriveUsageCard from "../UsageCard/GDriveUsageCard";
import ConnectOneDrive from "../Buttons/ConnectOneDrive";

const RightSidebar = () => {
  return (
    <div className=" space-y-6 w-[290px] bg-white px-5">
      <UserProfileDropdown />
      <GDriveUsageCard />
    </div>
  );
};

export default RightSidebar;
