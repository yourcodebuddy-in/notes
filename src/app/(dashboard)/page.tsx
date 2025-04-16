import { NewPageButton } from "@/components/new-page-button";
import { IconFolderFilled } from "@tabler/icons-react";
import { Suspense } from "react";
import { PagesList, PagesListSkeleton } from "./_components/pages-list";

interface Props {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function Page({ searchParams }: Props) {
  const { search } = await searchParams;

  return (
    <div>
      <div className="space-y-8">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <IconFolderFilled className="text-primary" /> Workspace
            </h1>
            <p className="text-sm text-muted-foreground">Create or manage your workspace</p>
          </div>
          <div>
            <NewPageButton variant="default" />
          </div>
        </div>
        <Suspense fallback={<PagesListSkeleton />}>
          <PagesList search={search} />
        </Suspense>
      </div>
    </div>
  );
}
