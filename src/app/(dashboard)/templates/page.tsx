import { templates } from "@/data/templates";
import { db } from "@/db";
import { pages } from "@/db/schema/notes";
import { getSessionStrict } from "@/lib/auth";
import { IconSquares } from "@tabler/icons-react";
import { eq } from "drizzle-orm";
import { Suspense } from "react";
import { CloneNoteButton } from "./_components/clone-note-button";
import { TemplateListClient } from "./_components/template-list.client";

interface Props {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function Page({ searchParams }: Props) {
  const { search } = await searchParams;
  const session = await getSessionStrict();
  const pagesData = await db.query.pages.findMany({
    where: eq(pages.userId, session.user.id),
    columns: {
      id: true,
      title: true,
    },
  });

  return (
    <div>
      <div className="space-y-8">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <IconSquares className="-scale-x-100 text-primary" /> Templates
            </h1>
            <p className="text-sm text-muted-foreground">Create new notes from templates</p>
          </div>
          <div>
            <CloneNoteButton pages={pagesData} />
          </div>
        </div>
        <div>
          <Suspense fallback={<div></div>}>
            <PageWithFetch search={search} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

async function PageWithFetch({ search }: { search?: string }) {
  const filteredTemplates = templates.filter((template) =>
    template.title.toLowerCase().includes(search?.toLowerCase() || "")
  );
  return <TemplateListClient templates={filteredTemplates} />;
}
