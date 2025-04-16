"use client";

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { IconSquares, IconTrash } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain() {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem title="Templates">
          <SidebarMenuButton asChild isActive={pathname === "/templates"}>
            <Link href="/templates">
              <IconSquares className="-scale-x-100" />
              Templates
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem title="Trash">
          <SidebarMenuButton asChild isActive={pathname === "/trash"}>
            <Link href="/trash">
              <IconTrash />
              Trash
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
