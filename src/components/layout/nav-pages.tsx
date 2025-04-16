import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { db } from "@/db";
import { pages } from "@/db/schema/notes";
import { getSessionStrict } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { PageMenuItem } from "./page-menu-item";

export function NavPages() {
  return (
    <Suspense
      fallback={
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground uppercase">Workspace</SidebarGroupLabel>
          <SidebarMenu>
            {Array.from({ length: 3 }).map((_, index) => (
              <SidebarMenuItem key={index}>
                <Skeleton className="w-full h-8" />
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      }
    >
      <NavPagesWithFetch />
    </Suspense>
  );
}

async function NavPagesWithFetch() {
  const session = await getSessionStrict();
  const userPages = await db.query.pages.findMany({
    where: eq(pages.userId, session.user.id),
  });

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-muted-foreground uppercase">Workspace</SidebarGroupLabel>
      <SidebarMenu>
        {userPages.map((page) => (
          <PageMenuItem key={page.id} page={page} />
        ))}
        {userPages.length === 0 && (
          <SidebarMenuItem className="group-data-[state=collapsed]:hidden">
            <SidebarMenuButton size="lg" className="text-xs justify-center border border-dashed h-20">
              No pages yet
            </SidebarMenuButton>
          </SidebarMenuItem>
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
