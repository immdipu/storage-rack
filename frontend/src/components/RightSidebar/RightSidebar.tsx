import UserProfileDropdown from "@/components/userProfileDropdown/UserProfileDropdown";
import React from "react";
import UsageCard from "../UsageCard/UsageCard";
import ConnectGDrive from "../Buttons/ConnectGDrive";

const RightSidebar = () => {
  return (
    <div className=" space-y-6 w-[290px] bg-white px-5">
      <UserProfileDropdown />
      <ConnectGDrive />
      <UsageCard />
      <UsageCard />
    </div>
  );
};

export default RightSidebar;
