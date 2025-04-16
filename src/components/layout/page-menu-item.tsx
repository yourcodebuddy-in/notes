"use client";
import { pageIcons } from "@/data/icons";
import { Page } from "@/db/types";
import { IconDotsVertical, IconHash, TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { PageMenu } from "./page-menu";

interface Props {
  page: Page;
}

export function PageMenuItem({ page }: Props) {
  const { id, icon, title, color } = page;
  const pathname = usePathname();
  const Icon = pageIcons[icon as keyof typeof pageIcons] as TablerIcon | undefined;

  return (
    <SidebarMenuItem title={title}>
      <SidebarMenuButton asChild className="justify-between" isActive={pathname.startsWith(`/${id}`)}>
        <div>
          <Link href={`/${id}`} className="grid grid-cols-[25px_1fr] items-center w-full">
            {Icon ? (
              <Icon className="w-4 h-4 mr-2 aspect-square" style={{ color }} />
            ) : (
              <IconHash className="w-4 h-4 mr-2 aspect-square" style={{ color }} />
            )}
            <span className="truncate text-left">{title}</span>
          </Link>
          <PageMenu page={page}>
            <Button variant="ghost" size="icon" className="w-fit focus-visible:ring-0">
              <IconDotsVertical className="w-4 h-4" />
            </Button>
          </PageMenu>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
