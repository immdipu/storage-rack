import UserProfileDropdown from "@/app/userProfileDropdown/UserProfileDropdown";
import React from "react";

const RightSidebar = () => {
  return (
    <div className="fixed right-0 w-[290px] bg-white top-0 bottom-0">
      <UserProfileDropdown />
    </div>
  );
};

export default RightSidebar;
