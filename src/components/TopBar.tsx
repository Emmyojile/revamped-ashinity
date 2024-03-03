import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#products",
    label: "Products",
  },
  {
    href: "#programs",
    label: "Programs",
  },
  {
    href: "#events",
    label: "Events",
  },
  {
    href: "#team",
    label: "Team",
  },
];

export const Topbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-t-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto my-3">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            {/* <a href="/" className="ml-2 font-bold text-xl flex">
              <img alt="logo" src="/logo.png" className="w-28" />
            </a> */}
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            {/* <ModeToggle /> */}
                <Button className="rounded-full bg-slate-800 text-green-70 p-6 flex hover:text-white hover:bg-green-70">
             Book Now
         </Button>
            
          </span> 

          {/* desktop */}
          <nav className="hidden md:flex md:mr-0 gap-2 r-0">
            
            {/* {routeList.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))} */}
            <Button className="rounded-full bg-slate-800 text-green-70 p-6 flex hover:text-white hover:bg-green-70">
             Book Now
         </Button>
          </nav>

          {/* <div className="hidden md:flex gap-2">
            {/* <a
              href="https://github.com/leoMirandaa/shadcn-landing-page.git"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a> */}

            {/* <ModeToggle /> */}
          {/* </div> */} 
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};