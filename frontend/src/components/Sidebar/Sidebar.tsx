import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SidebarToggle } from "./SidebarToggle";
import { cn } from "@/lib/utils";
import { Menu } from "./Menu";
import Logo from "@/shared/Logo";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20  bg-secondary h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        isOpen === false ? "w-[90px]" : "w-60"
      )}
    >
      {/* <SidebarToggle isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            >
              <Logo />
            </h1>
          </Link>
        </Button>
        <Menu isOpen={isOpen} />
      </div>
    </aside>
  );
};

export default Sidebar;
