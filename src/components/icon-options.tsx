"use client";

import { pageIcons } from "@/data/icons";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface Props {
  selectedIcon?: string;
  setSelectedIcon?: (icon: string) => void;
}

export function IconOptions({ selectedIcon, setSelectedIcon }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: "auto",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2">
        {Object.entries(pageIcons).map(([name, Icon]) => (
          <CarouselItem key={name} className="pl-2 basis-1/6 md:basis-[calc(1/8*100%)]">
            <button
              type="button"
              className="w-full aspect-square rounded-lg relative border-2 aria-selected:border-primary"
              aria-selected={name === selectedIcon}
              onClick={() => setSelectedIcon?.(name)}
            >
              <Icon stroke={1.5} className="size-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-2 !size-6" />
      <CarouselNext className="-right-2 !size-6" />
    </Carousel>
  );
}
