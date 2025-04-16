import { NewPageButton } from "@/components/new-page-button";
import { getPages } from "@/db/fetch";
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
      <div className="space-y-10">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <IconFolderFilled className="text-primary" /> Workspaces
            </h1>
            <p className="text-sm text-muted-foreground">Create or manage your workspaces</p>
          </div>
          <div>
            <NewPageButton variant="default" className="[&_svg]:hidden" />
          </div>
        </div>
        <Suspense fallback={<PagesListSkeleton />}>
          <PageWithFetch search={search} />
        </Suspense>
      </div>
    </div>
  );
}

async function PageWithFetch({ search }: { search?: string }) {
  const pages = await getPages({ search });
  return <PagesList pages={pages} />;
}
