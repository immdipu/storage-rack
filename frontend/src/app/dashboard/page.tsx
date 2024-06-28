import RecentFiles from "@/components/RecentFiles/RecentFiles";
import RightSidebar from "@/components/RightSidebar/RightSidebar";
import Search from "@/components/Search/Search";
import SidebarLayout from "@/layout/SidebarLayout";
import React from "react";

const page = () => {
  return (
    <SidebarLayout>
      <div className=" flex">
        <div className="px-10 mt-8 w-[calc(100%-290px)]">
          <Search />
          <section className="mt-6">
            <h2 className="font-jost text-xl font-semibold text-blue-dark">
              Recent
            </h2>
            <div>
              <RecentFiles />
            </div>
          </section>
        </div>
        <RightSidebar />
      </div>
    </SidebarLayout>
  );
};

export default page;
