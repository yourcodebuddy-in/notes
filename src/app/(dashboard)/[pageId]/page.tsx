import { Skeleton } from "@/components/ui/skeleton";
import { cache, Suspense } from "react";
import { NotesList } from "./_components/notes-list";
import { getNotes } from "./_utils/fetch";

interface Props {
  params: Promise<{ pageId: string }>;
  searchParams: Promise<{ note?: string; search?: string }>;
}

export default function Page({ params, searchParams }: Props) {
  return (
    <Suspense
      fallback={
        <div className="space-y-4 hidden lg:block">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-30 rounded-xl" />
          ))}
        </div>
      }
    >
      <PageWithFetch params={params} searchParams={searchParams} />
    </Suspense>
  );
}

async function PageWithFetch({ params, searchParams }: Props) {
  const { pageId } = await params;
  const { note, search } = await searchParams;
  const notes = await cache(getNotes)({ pageId, status: "active", search });
  const sortedNotes = notes.sort((a, b) => Number(b.pinned) - Number(a.pinned));

  return <NotesList notes={sortedNotes} activeNoteId={note} />;
}
