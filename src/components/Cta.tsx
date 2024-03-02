import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { EVENTTABS, PRODUCTSTABS } from "@/constants";

export const Cta = () => {
      // Define an array of background images
      const backgroundImages = [
        '/eventOne.png',
        '/eventTwo.png', // Add more image URLs as needed
        // '/eventThree.png'
      ];
  
      const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  
      useEffect(() => {
        // Function to change background image after 5 seconds
        const changeBackground = () => {
          setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        };
    
        const interval = setInterval(changeBackground, 7000);
    
        // Clean up function to clear interval when component unmounts
        return () => clearInterval(interval);
      }, []); // Empty dependency array to run this effect only once on mount
    
    
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  // Automatically change to the next service card after a certain duration
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProductIndex(
        (prevIndex) => (prevIndex + 1) % EVENTTABS.length
      );
    }, 7000); // Change service card every 5 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section
      id="cta"
      className=" py-16 my-24 sm:my-32 min-h-screen"
      style={{ backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`, backgroundSize: 'cover' }}
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProductIndex}
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
                      {EVENTTABS[currentProductIndex].title}
                    </CardTitle>
                    <CardDescription className="flex-wrap font-bold text-1xl">
                      {EVENTTABS[currentProductIndex].description}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                    <Button
                      className="w-fit md:w-fit rounded-full mt-2 md:px-4 justify-center"
                    >
                      View Finalist
                    </Button>
                    <Button
                      className="w-fit md:w-fit rounded-full mt-2 md:px-4 justify-center"
                    >
                      Join Community
                    </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>


        </div>


      </div>
    </section>
  );
};
// import { Button } from "./ui/button";

// export const Cta = () => {
//   return (
//     <section
//       id="cta"
//       className="bg-muted/50 py-16 my-24 sm:my-32"
//     >
//       <div className="container lg:grid lg:grid-cols-2 place-items-center">
//         <div className="lg:col-start-1">
//           <h2 className="text-3xl md:text-4xl font-bold ">
//             All Your
//             <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//               {" "}
//               Ideas & Concepts{" "}
//             </span>
//             In One Interface
//           </h2>
//           <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
//             beatae. Ipsa tempore ipsum iste quibusdam illum ducimus eos. Quasi,
//             sed!
//           </p>
//         </div>

//         <div className="space-y-4 lg:col-start-2">
//           <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
//           <Button
//             variant="outline"
//             className="w-full md:w-auto"
//           >
//             View all features
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };
