import { Note } from "@/db/types";
import { NoteCard } from "./note-card";

interface Props {
  notes: Pick<Note, "id" | "title" | "excerpt">[];
}

export function NotesList({ notes }: Props) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
      {notes.length === 0 && (
        <div className="flex items-center justify-center h-40 border border-dashed rounded-lg">Trash is empty</div>
      )}
    </div>
  );
}
