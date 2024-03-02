
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react";
import { SERVICETABS } from "@/constants";
import { HeroCardsTwo } from "./HeroCardsTwo";

export const Services = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    // Automatically change to the next service card after a certain duration
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentServiceIndex(prevIndex => (prevIndex + 1) % SERVICETABS.length);
      }, 7000); // Change service card every 5 seconds
  
      return () => clearInterval(intervalId);
    }, []);
  return (
    <section id="services" className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
      <AnimatePresence mode='wait'>
          <motion.div
            key={currentServiceIndex}
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
                  <div>
                    <CardTitle className="text-white text-3xl mb-4">
                      {SERVICETABS[currentServiceIndex].title}
                    </CardTitle>
                    <CardDescription className="flex-wrap font-bold text-1xl">
                      {SERVICETABS[currentServiceIndex].description}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>
        
      </div>

       {/* Hero cards sections */}
      <div className="z-10">
        {/* <HeroCardsTwo /> */}
        {/* <HeroCards /> */}
      </div>
    </section>
  );
};





// import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
// import cubeLeg from "../assets/cube-leg.png";

// interface ServiceProps {
//   title: string;
//   description: string;
//   icon: JSX.Element;
// }

// const serviceList: ServiceProps[] = [
//   {
//     title: "Code Collaboration",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     icon: <ChartIcon />,
//   },
//   {
//     title: "Project Management",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     icon: <WalletIcon />,
//   },
//   {
//     title: "Task Automation",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     icon: <MagnifierIcon />,
//   },
// ];

// export const Services = () => {
//   return (
//     <section className="container py-24 sm:py-32">
//       <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold">
//             <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//               Client-Centric{" "}
//             </span>
//             Services
//           </h2>

//           <p className="text-muted-foreground text-xl mt-4 mb-8 ">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
//             dolor.
//           </p>

//           <div className="flex flex-col gap-8">
//             {serviceList.map(({ icon, title, description }: ServiceProps) => (
//               <Card key={title}>
//                 <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
//                   <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
//                     {icon}
//                   </div>
//                   <div>
//                     <CardTitle>{title}</CardTitle>
//                     <CardDescription className="text-md mt-2">
//                       {description}
//                     </CardDescription>
//                   </div>
//                 </CardHeader>
//               </Card>
//             ))}
//           </div>
//         </div>

//         <img
//           src={cubeLeg}
//           className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
//           alt="About services"
//         />
//       </div>
//     </section>
//   );
// };
