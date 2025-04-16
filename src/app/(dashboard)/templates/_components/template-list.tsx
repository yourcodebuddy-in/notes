import { StaticImageData } from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { TemplateCard } from "./template-card";

interface Props {
  templates: { title: string; description: string; thumbnail: StaticImageData }[];
}

export default function TemplateList({ templates }: Props) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
      <Masonry className="!gap-5 *:!gap-5">
        {templates.map((template) => (
          <TemplateCard
            key={template.title}
            title={template.title}
            description={template.description}
            thumbnail={template.thumbnail}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
