import { NavMain } from "@/components/layout/nav-main";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { Logo, LogoIcon } from "../logo";
import { NewPageButton } from "../new-page-button";
import { Button } from "../ui/button";
import { NavPages } from "./nav-pages";

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="px-4 py-6 group-data-[state=collapsed]:px-2">
        <div className="flex justify-between items-center gap-2">
          <Link href="/">
            <Logo className="group-data-[state=collapsed]:hidden w-fit h-7" />
            <LogoIcon className="group-data-[state=collapsed]:block hidden w-fit h-7" />
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavPages />
      </SidebarContent>
      <SidebarFooter className="pb-6">
        <Link href="https://youtu.be/hGC4-lBUMj4" target="_blank">
          <Button variant="secondary" className="w-full">
            <IconBrandYoutubeFilled /> <span className="group-data-[state=collapsed]:hidden">Demo</span>
          </Button>
        </Link>
        <NewPageButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
