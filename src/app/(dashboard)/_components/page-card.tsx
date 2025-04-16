import FolderCard from "@/components/folder-card";
import { pageIcons } from "@/data/icons";
import { Page } from "@/db/types";
import { IconHash } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
  page: Page;
}

export function PageCard({ page }: Props) {
  const Icon = pageIcons[page.icon as keyof typeof pageIcons] ?? <IconHash />;

  return (
    <Link href={`/${page.id}`}>
      <FolderCard
        title={page.title}
        icon={<Icon size={40} color={page.color} />}
        color={page.color}
        className="w-[40vw] h-[30vw] sm:w-[20vw] sm:h-[15vw] md:w-[15vw] md:h-[10vw] lg:w-[10vw] lg:h-[7vw]"
      />
      <h2 className="text-base lg:text-lg font-medium text-center pt-5">{page.title}</h2>
    </Link>
  );
}
