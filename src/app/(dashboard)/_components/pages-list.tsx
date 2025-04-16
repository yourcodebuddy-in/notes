import { Skeleton } from "@/components/ui/skeleton";
import { Page } from "@/db/types";
import { PageCard } from "./page-card";

interface Props {
  pages: Page[];
}

export async function PagesList({ pages }: Props) {
  return (
    <div>
      <div className="flex flex-wrap justify-baseline gap-6 md:gap-10">
        {pages.map((page) => (
          <PageCard key={page.id} page={page} />
        ))}
      </div>
      {pages.length === 0 && (
        <div className="flex items-center justify-center px-4 py-10 border border-dashed rounded-md">
          <p className="text-muted-foreground">No workspaces found</p>
        </div>
      )}
    </div>
  );
}

export function PagesListSkeleton() {
  return (
    <div className="flex flex-wrap justify-baseline gap-6 md:gap-10">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="w-52 h-36" />
      ))}
    </div>
  );
}
