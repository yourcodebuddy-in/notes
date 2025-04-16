import { getNotes } from "@/db/fetch";
import { IconTrash } from "@tabler/icons-react";
import { Suspense } from "react";
import { ClearTrashButton } from "./_components/clear-trash-button";
import { NotesList, NotesListSkeleton } from "./_components/notes-list";

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
              <IconTrash className="text-primary" /> Trash
            </h1>
            <p className="text-sm text-muted-foreground">Restore or permenantly delete your notes</p>
          </div>
          <div>
            <ClearTrashButton />
          </div>
        </div>
        <div>
          <Suspense fallback={<NotesListSkeleton />}>
            <PageWithFetch search={search} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

async function PageWithFetch({ search }: { search?: string }) {
  const notes = await getNotes({ status: "trashed", search });
  return <NotesList notes={notes} />;
}
