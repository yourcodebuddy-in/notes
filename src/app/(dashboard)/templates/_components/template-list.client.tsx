"use client";

import dynamic from "next/dynamic";
import { StaticImageData } from "next/image";
const TemplateList = dynamic(() => import("./template-list"), { ssr: false });

interface Props {
  templates: { title: string; description: string; thumbnail: StaticImageData }[];
}

export function TemplateListClient({ templates }: Props) {
  return <TemplateList templates={templates} />;
}
