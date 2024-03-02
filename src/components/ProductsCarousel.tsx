import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { PRODUCTSTABS } from "@/constants";

export function ProductsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className=""
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {PRODUCTSTABS.map((item, index) => (
          <CarouselItem key={index} className="">
            <div className="w-full">
              <Card className=" bg-inherit border-none">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div>
                    <CardTitle className="text-white text-3xl mb-4">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="flex-wrap font-bold text-1xl">
                      {item.description}
                    </CardDescription>
                    <Button className="rounded-full bg-slate-800 text-green-70 p-6 flex w-1/4 hover:text-white hover:bg-green-70 mt-3">
                      View Website
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
