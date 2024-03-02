import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className=" min-h-screen grid lg:grid-cols-1 place-items-center py-20 md:py-32 gap-10 text-center">
      <div className="text-center lg:text-center space-y-6 mx-auto">
        <img alt="logo" src="/logo.png" className="w-60 mx-auto" />
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
          Take your product to the next level
          </h1>{" "}

        </main>

        <p className="md:w-10/12 mx-auto lg:text-center ">
        Experience the power of tailored solutions, cutting-edge technology,
          and unmatched expertise that will <br /> propel your business to new
          heights.
        </p>

          {/* <Button className="rounded-full flex sm:w-1/4 w-1/2   mt-3">Learn More</Button> */}
          <Button className="w-fit md:w-fit item-center rounded-full mx-auto  hover:text-white hover:bg-green-70 bg-slate-800 text-green-70 px-10">Learn More</Button>
      </div>


    </section>
  );
};


/*
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Shadcn
            </span>{" "}
            landing page
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your React landing page effortlessly with the required sections
          to your project.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      // {/* Hero cards sections */
      // <div className="z-10">
      //   <HeroCards />
      // </div>

      {/* Shadow effect */}
//       <div className="shadow"></div>
//     </section>
//   );
// };

