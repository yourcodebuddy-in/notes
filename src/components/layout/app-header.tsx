"use client";
import { SidebarTrigger } from "../ui/sidebar";
import { AvatarAndUserMenu } from "./avatar-and-user-menu";
import { Search } from "./search";

export function AppHeader() {
  return (
    <header className="flex px-4 justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear sticky top-0 z-50 bg-background">
      <div className="flex items-center gap-2 w-full">
        <SidebarTrigger className="-ml-1" />
        <Search className="w-full max-w-80" />
      </div>
      <AvatarAndUserMenu />
    </header>
  );
}
