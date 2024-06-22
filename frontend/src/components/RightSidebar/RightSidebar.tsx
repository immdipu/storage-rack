import UserProfileDropdown from "@/components/userProfileDropdown/UserProfileDropdown";
import React from "react";
import UsageCard from "../UsageCard/UsageCard";

const RightSidebar = () => {
  return (
    <div className=" space-y-6 w-[290px] bg-white px-5">
      <UserProfileDropdown />

      <UsageCard />
      <UsageCard />
    </div>
  );
};

export default RightSidebar;
