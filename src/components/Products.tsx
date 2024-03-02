import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProductsCarousel } from "./ProductsCarousel";
import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { PRODUCTSTABS } from "@/constants";

export const Products = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  // Automatically change to the next service card after a certain duration
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProductIndex(
        (prevIndex) => (prevIndex + 1) % PRODUCTSTABS.length
      );
    }, 7000); // Change service card every 5 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section id="products" className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
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
                      {PRODUCTSTABS[currentProductIndex].title}
                    </CardTitle>
                    <CardDescription className="flex-wrap font-bold text-1xl">
                      {PRODUCTSTABS[currentProductIndex].description}
                    </CardDescription>
                    {/* <div className="flex flex-col sm:flex-row gap-3 flex-wrap"> */}
                    <Button
                      className="mt-4 w-fit md:w-fit item-center rounded-full mx-auto  hover:text-white hover:bg-green-70 bg-slate-800 text-green-70 px-10"
                      onClick={() =>
                        window.open(
                          PRODUCTSTABS[currentProductIndex].link,
                          "_blank"
                        )
                      }
                    >
                      Visit Website
                    </Button>
                    {/* </div> */}
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

// import { Badge } from "./ui/badge";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import image from "../assets/growth.png";
// import image3 from "../assets/reflecting.png";
// import image4 from "../assets/looking-ahead.png";

// interface FeatureProps {
//   title: string;
//   description: string;
//   image: string;
// }

// const features: FeatureProps[] = [
//   {
//     title: "Responsive Design",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     image: image4,
//   },
//   {
//     title: "Intuitive user interface",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     image: image3,
//   },
//   {
//     title: "AI-Powered insights",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     image: image,
//   },
// ];

// const featureList: string[] = [
//   "Dark/Light theme",
//   "Reviews",
//   "Features",
//   "Pricing",
//   "Contact form",
//   "Our team",
//   "Responsive design",
//   "Newsletter",
//   "Minimalist",
// ];

// export const Features = () => {
//   return (
//     <section
//       id="features"
//       className="container py-24 sm:py-32 space-y-8"
//     >
//       <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
//         Many{" "}
//         <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//           Great Features
//         </span>
//       </h2>

//       <div className="flex flex-wrap md:justify-center gap-4">
//         {featureList.map((feature: string) => (
//           <div key={feature}>
//             <Badge
//               variant="secondary"
//               className="text-sm"
//             >
//               {feature}
//             </Badge>
//           </div>
//         ))}
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {features.map(({ title, description, image }: FeatureProps) => (
//           <Card key={title}>
//             <CardHeader>
//               <CardTitle>{title}</CardTitle>
//             </CardHeader>

//             <CardContent>{description}</CardContent>

//             <CardFooter>
//               <img
//                 src={image}
//                 alt="About feature"
//                 className="w-[200px] lg:w-[300px] mx-auto"
//               />
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };
