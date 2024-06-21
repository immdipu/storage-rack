import Search from "@/components/Search/Search";
import SidebarLayout from "@/layout/SidebarLayout";
import React from "react";

const page = () => {
  return (
    <SidebarLayout>
      <div className="px-10 mt-2">
        <Search />
      </div>
    </SidebarLayout>
  );
};

export default page;
