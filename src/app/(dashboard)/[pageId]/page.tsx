import { getNotes } from "@/db/fetch";
import { cache, Suspense } from "react";
import { NotesList, NotesListSkeleton } from "./_components/notes-list";

interface Props {
  params: Promise<{ pageId: string }>;
  searchParams: Promise<{ note?: string; search?: string }>;
}

export default function Page({ params, searchParams }: Props) {
  return (
    <Suspense fallback={<NotesListSkeleton />}>
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
