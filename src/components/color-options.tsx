"use client";
import { IconCheck } from "@tabler/icons-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface Props {
  selectedColor?: string;
  setSelectedColor?: (color: string) => void;
}

const colors = [
  "#F27700",
  "#FF0000",
  "#FF8C00",
  "#FFD700",
  "#32CD32",
  "#00BFFF",
  "#8A2BE2",
  "#FF1493",
  "#FF4500",
  "#00FF00",
  "#FF69B4",
  "#4169E1",
  "#9400D3",
  "#FF6347",
  "#20B2AA",
  "#FF8C69",
  "#4682B4",
];

export function ColorOptions({ selectedColor, setSelectedColor }: Props) {
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
        {colors.map((color) => (
          <CarouselItem key={color} className="pl-2 basis-1/6 md:basis-[calc(1/8*100%)]">
            <button
              type="button"
              className="w-full aspect-square rounded-lg relative cursor-pointer text-white"
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor?.(color)}
            >
              {color === selectedColor && (
                <IconCheck stroke={4} className="size-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              )}
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-2 !size-6" />
      <CarouselNext className="-right-2 !size-6" />
    </Carousel>
  );
}
