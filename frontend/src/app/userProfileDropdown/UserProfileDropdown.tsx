import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const UserProfileDropdown = () => {
  return (
    <div className="mt-8 px-5">
      <DropdownMenu>
        <DropdownMenuTrigger className="border py-2 outline-none hover:shadow-sm justify-between px-2 w-full rounded-xl flex items-center">
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="">
              <div>
                <h5 className="text-start text-xs text-neutral-400 font-light">
                  Hello!
                </h5>
                <h3 className="text-start line-clamp-1 text-blue-dark text-sm font-medium">
                  Dipu Chaurasiya
                </h3>
              </div>
            </div>
          </div>

          <div className="mr-3">
            <ChevronDown size={20} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full ">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfileDropdown;
