"use client";
import { useUser } from "@/context/user-provider";
import { authClient } from "@/lib/auth.client";
import { IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function AvatarAndUserMenu() {
  const { user } = useUser();
  const router = useRouter();

  async function logout() {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      router.push("/login");
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-10">
          <AvatarImage src={user?.image ?? ""} />
          <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={logout}>
          <IconLogout />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
