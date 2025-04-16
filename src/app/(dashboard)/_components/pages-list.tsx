import { Skeleton } from "@/components/ui/skeleton";
import { getPages } from "../_utils/fetch";
import { PageCard } from "./page-card";

interface Props {
  search?: string;
}

export async function PagesList({ search }: Props) {
  const pages = await getPages({ search });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className="w-full h-36" />
      ))}
    </div>
  );
}
