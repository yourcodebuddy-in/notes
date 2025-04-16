import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TanstackQueryProvider } from "@/context/tanstack-query-context";
import { UserProvider } from "@/context/user-provider";
import { User } from "@/db/types";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <TanstackQueryProvider>
      <UserProvider user={session.user as User}>
        <NuqsAdapter>
          <SidebarProvider>
            <AppSidebar className="!border-0" />
            <SidebarInset>
              <AppHeader />
              <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">{children}</div>
            </SidebarInset>
          </SidebarProvider>
        </NuqsAdapter>
      </UserProvider>
    </TanstackQueryProvider>
  );
}
