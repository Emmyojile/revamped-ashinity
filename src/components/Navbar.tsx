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
import { buttonVariants } from "./ui/button";
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

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-t-[1px] bottom-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background min-h-fit">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a href="/" className="ml-2 font-bold text-xl flex">
              <img alt="logo" src="/logo.png" className="w-28" />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            {/* <ModeToggle /> */}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"right"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                  <img alt="logo" src="/logo.png" className="" />

                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost"})}
                    >
                      {label}
                    </a>
                  ))}
                
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex md:mr-0 gap-2 r-0 ">
            {routeList.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
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




// import useMediaQuery from "@/hooks/useMediaQuery";
// import { useState } from "react";
// import { Button } from "./ui/button";


// const Topbar = ({ isTopOfPage, selectedPage, setSelectedPage }:any) => {
//   const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
//   const navbarBackground = isTopOfPage ? "" : "bg-deep-blue";

//   return (
//     <nav
//       className={`${navbarBackground} z-0 w-full fixed top-0 py-4 bg-opaque-black border-t border-slate-900`}
//     >
//       <div className="flex items-center justify-between mx-auto w-5/6 bg-bl">
//         <div className="w-28"></div>
//         {/* <img alt="logo" src="../public/logo.png" className="w-28" /> */}
//         {/* DESKTOP NAV */}
//         {isAboveSmallScreens ? (
//         //   <div className="flex gap-16 font-opensans text-sm font-semibold">
//             <Button className="rounded-full bg-slate-800 text-green-70 p-6 flex hover:text-white hover:bg-green-70">
//               Book Now
//             </Button>
//         //   </div>
//         ) : (
//           <Button className="rounded-full bg-slate-800 text-green-70 p-6 flex hover:text-white hover:bg-green-70">
//             Book Now
//           </Button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Topbar;