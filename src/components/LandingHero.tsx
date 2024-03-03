import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react";
import { HEROTABS } from "@/constants";

export const LandingHero = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Automatically change to the next service card after a certain duration
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeroIndex(prevIndex => (prevIndex + 1) % HEROTABS.length);
    }, 7000); // Change service card every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <img alt="logo" src="/logo.png" className="w-60" />
        <main className="text-3xl md:text-4xl font-bold">
          <h2 className="text-start">
            Core Values
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        At Ashinity, our team is the driving force behind our success and your digital triumphs. We have assembled a dynamic and diverse group of professionals, each passionate about technology and committed to delivering exceptional results.
        </p>

      </div>

      {/* // {/* Hero cards sections */}
       <div className="z-10">

       <AnimatePresence mode='wait'>
          <motion.div
            key={currentHeroIndex}
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
                      {HEROTABS[currentHeroIndex].title}
                    </CardTitle>
                    <CardDescription className="flex-wrap font-bold text-1xl">
                      {HEROTABS[currentHeroIndex].description}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* <HeroCards /> */}
       </div>

     </section>
   );
 }; 
