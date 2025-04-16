"use client";
import { Button } from "@/components/ui/button";
import { deleteNote as deleteNoteAction, updateNote } from "@/db/actions";
import { Note } from "@/db/types";
import { IconRestore, IconTrashX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Card, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";

interface Props {
  note: Pick<Note, "id" | "title" | "excerpt">;
}

export function NoteCard({ note }: Props) {
  const [isRestoring, setIsRestoring] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  async function restoreNote() {
    try {
      setIsRestoring(true);
      await updateNote({ id: note.id, status: "active" });
      router.refresh();
    } catch (_error) {
      toast.error("Failed to restore note");
    } finally {
      setIsRestoring(false);
    }
  }

  async function deleteNote() {
    try {
      setIsDeleting(true);
      await deleteNoteAction(note.id);
      router.refresh();
    } catch (_error) {
      toast.error("Failed to restore note");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Card className="shadow-none bg-secondary/60 p-5">
      <CardHeader className="!p-0">
        <div className="grid grid-cols-[1fr_auto] gap-2 items-start">
          <div className="space-y-2">
            <CardTitle className="pr-2">{note.title}</CardTitle>
            <CardDescription className="break-all line-clamp-2">{note.excerpt}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              title="Restore"
              variant="outline"
              size="icon"
              onClick={restoreNote}
              disabled={isRestoring}
              isLoading={isRestoring}
            >
              <IconRestore />
            </Button>
            <Button
              title="Delete"
              variant="destructive"
              size="icon"
              onClick={deleteNote}
              disabled={isDeleting}
              isLoading={isDeleting}
            >
              <IconTrashX />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
