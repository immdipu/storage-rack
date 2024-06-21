"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import useRoutes from "@/hooks/useRoutes";
import clsx from "clsx";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const routes = useRoutes();

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {routes.map((route, index) => (
            <li className={cn("w-full")} key={index}>
              <div className="w-full" key={index}>
                <TooltipProvider disableHoverableContent>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button
                        className={clsx(
                          "w-full justify-start h-12 mb-1",
                          route.active
                            ? "bg-primary text-white rounded-xl"
                            : " bg-transparent"
                        )}
                        asChild
                      >
                        <Link href={route.href}>
                          <span className={cn(isOpen === false ? "" : "mr-4")}>
                            <route.icon size={18} />
                          </span>
                          <p
                            className={cn(
                              "max-w-[200px] truncate",
                              isOpen === false
                                ? "-translate-x-96 opacity-0"
                                : "translate-x-0 opacity-100"
                            )}
                          >
                            {route.label}
                          </p>
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    {isOpen === false && (
                      <TooltipContent side="right">
                        {route.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </div>
            </li>
          ))}
          <li className="w-full grow flex items-end">
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => {}}
                    variant="outline"
                    className="w-full justify-center h-10 mt-5"
                  >
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <LogOut size={18} />
                    </span>
                    <p
                      className={cn(
                        "whitespace-nowrap",
                        isOpen === false ? "opacity-0 hidden" : "opacity-100"
                      )}
                    >
                      Sign out
                    </p>
                  </Button>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side="right">Sign out</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
}
