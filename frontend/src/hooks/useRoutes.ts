import { usePathname } from "next/navigation";
import {
  Bookmark,
  LayoutGrid,
  Settings,
  SquarePen,
  Tag,
  Users,
} from "lucide-react";

const useRoutes = () => {
  const pathname = usePathname();
  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname.includes("/dashboard"),
      icon: LayoutGrid,
    },
    {
      href: "",
      label: "Posts",
      active: pathname.includes("/posts"),
      icon: SquarePen,
    },
    {
      href: "/categories",
      label: "Categories",
      active: pathname.includes("/categories"),
      icon: Bookmark,
    },
    {
      href: "/tags",
      label: "Tags",
      active: pathname.includes("/tags"),
      icon: Tag,
    },
    {
      href: "/users",
      label: "Users",
      active: pathname.includes("/users"),
      icon: Users,
    },
    {
      href: "/account",
      label: "Account",
      active: pathname.includes("/account"),
      icon: Settings,
    },
  ];

  return routes;
};

export default useRoutes;
