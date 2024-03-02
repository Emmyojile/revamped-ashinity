import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react";
import { PROGRAMTABS } from "@/constants";

export const Programs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  // Automatically change to the next program tab after a certain duration
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTab((prevTab) => (prevTab + 1) % PROGRAMTABS.length);
    }, 7000); // Change program tab every 5 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h2 className="inline">
            Blockchain Academy
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Whether you're a beginner looking to start your journey, an
          intermediate learner seeking to deepen your skills, or an advanced
          enthusiast ready to innovate, our curriculum caters to your needs.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Reister</Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
      <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -50 }}
            transition={{
              duration: 1.5, // Increase duration for slower transition
              delay: 0.5, // Hang for 0.5 seconds before exit animation
              type: "tween",
              ease: "easeInOut", // Adjust ease function as needed
            }}
          >
            <div className="w-full">
              <Card className=" bg-inherit border-none">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="gap-2">
                    <CardTitle className="text-white text-3xl mb-4">
                      {PROGRAMTABS[currentTab].title}
                    </CardTitle>
                    <CardDescription className="flex-wrap font-bold text-1xl">
                      {PROGRAMTABS[currentTab].description}
                      <motion.h1>What To Expect</motion.h1>
                    <div className="mt-2 pl-8">

                    <motion.ol className="">
                      {PROGRAMTABS[currentTab].whatToExpect.map(
                        (item, index) => (
                          <motion.li key={index}>{item}</motion.li>
                          )
                          )}
                    </motion.ol>
                  </div>
                  </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

// interface FeatureProps {
//   icon: JSX.Element;
//   title: string;
//   description: string;
// }

// const features: FeatureProps[] = [
//   {
//     icon: <MedalIcon />,
//     title: "Accesibility",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
//   {
//     icon: <MapIcon />,
//     title: "Community",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
//   {
//     icon: <PlaneIcon />,
//     title: "Scalability",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
//   {
//     icon: <GiftIcon />,
//     title: "Gamification",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
// ];

// export const HowItWorks = () => {
//   return (
//     <section
//       id="howItWorks"
//       className="container text-center py-24 sm:py-32"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold ">
//         How It{" "}
//         <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//           Works{" "}
//         </span>
//         Step-by-Step Guide
//       </h2>
//       <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
//         dolor pariatur sit!
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {features.map(({ icon, title, description }: FeatureProps) => (
//           <Card
//             key={title}
//             className="bg-muted/50"
//           >
//             <CardHeader>
//               <CardTitle className="grid gap-4 place-items-center">
//                 {icon}
//                 {title}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>{description}</CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };
