import UserProfileDropdown from "@/components/userProfileDropdown/UserProfileDropdown";
import React from "react";
import UsageCard from "../UsageCard/UsageCard";

const RightSidebar = () => {
  return (
    <div className="  w-[290px] bg-white ">
      <UserProfileDropdown />
      <UsageCard />
    </div>
  );
};

export default RightSidebar;
