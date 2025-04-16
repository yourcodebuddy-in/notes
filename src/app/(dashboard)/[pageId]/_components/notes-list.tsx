import { NoteCard } from "@/app/(dashboard)/[pageId]/_components/note-card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Note } from "@/db/types";
import { cn } from "@/lib/utils";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
  notes: Pick<Note, "id" | "title" | "excerpt" | "pinned" | "readTime">[];
  activeNoteId?: string;
}

export function NotesList({ notes, activeNoteId }: Props) {
  return (
    <div className="space-y-4">
      {activeNoteId && (
        <div className="lg:hidden">
          <Link href="?">
            <Button variant="outline">
              <IconChevronLeft /> Notes
            </Button>
          </Link>
        </div>
      )}
      <ScrollArea className="lg:h-[calc(100dvh-210px)]">
        <div className={cn("space-y-4", activeNoteId && "max-lg:hidden")}>
          {notes?.map((note) => (
            <Link className="block" href={`?note=${note.id}`} key={note.id}>
              <NoteCard note={note} selected={activeNoteId === note.id} />
            </Link>
          ))}
          {notes.length === 0 && (
            <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">No notes found</div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
