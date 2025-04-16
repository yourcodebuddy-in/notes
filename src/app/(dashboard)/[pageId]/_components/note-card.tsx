import { Note } from "@/db/types";
import { IconClock } from "@tabler/icons-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";

interface Props {
  note: Pick<Note, "id" | "title" | "excerpt" | "pinned" | "readTime">;
  selected?: boolean;
}

export function NoteCard({ note, selected = false }: Props) {
  const readTime = note.readTime / 60;
  const roundedReadTime = String(readTime).includes(".") ? readTime.toFixed(1) : readTime;

  return (
    <Card
      className="shadow-none bg-secondary/60 p-5 hover:bg-primary hover:text-primary-foreground group aria-selected:bg-primary aria-selected:text-primary-foreground"
      aria-selected={selected}
    >
      <CardHeader className="!p-0 space-y-2 relative">
        <CardTitle className="pr-2">{note.title}</CardTitle>
        <CardDescription className="group-aria-selected:text-white group-hover:text-white break-all">
          {note.excerpt}
        </CardDescription>
        <div className="m-0 flex justify-between items-center text-sm *:text-muted-foreground *:group-hover:text-white *:group-aria-selected:text-white">
          <p className="flex items-center gap-1">
            <IconClock size={16} /> {roundedReadTime} min
          </p>
        </div>
        {note.pinned && (
          <div className="block rounded-full size-4 bg-white border-4 border-primary absolute top-0 right-0" />
        )}
      </CardHeader>
    </Card>
  );
}
