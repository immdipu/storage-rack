import React, { FC } from "react";
import clsx from "clsx";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  return <div className="pt-2 pl-[240px]">{children}</div>;
};

export default SidebarLayout;
