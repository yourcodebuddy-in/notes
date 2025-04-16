"use client";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  description: string;
  thumbnail: StaticImageData;
}

export function TemplateCard({ title, description, thumbnail }: Props) {
  return (
    <Card className="shadow-none bg-secondary/60 p-5 h-fit w-full">
      <CardHeader className="!p-0 space-y-2 relative">
        <CardTitle className="pr-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="rounded-xl overflow-hidden border">
          <Image src={thumbnail} alt={title} />
        </div>
      </CardHeader>
    </Card>
  );
}
