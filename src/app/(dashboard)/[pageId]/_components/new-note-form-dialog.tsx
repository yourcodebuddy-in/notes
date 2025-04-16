import { Button } from "@/components/ui/button";
import {
  DialogOrDrawer,
  DialogOrDrawerContent,
  DialogOrDrawerDescription,
  DialogOrDrawerHeader,
  DialogOrDrawerTitle,
} from "@/components/ui/dialog-or-drawer";
import { Input } from "@/components/ui/input";
import { createNote as createNoteAction } from "@/db/actions";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  pageId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function NewNoteFormDialog({ open, onOpenChange, pageId, onSuccess }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  async function createNote(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setIsLoading(true);
      const formData = new FormData(e.target as HTMLFormElement);
      const title = formData.get("title") as string | null;
      if (!title) return;
      await createNoteAction({ title, pageId });
      onOpenChange(false);
      onSuccess?.();
    } catch (_error) {
      toast.error("Failed to create note");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DialogOrDrawer open={open} onOpenChange={onOpenChange}>
      <DialogOrDrawerContent>
        <DialogOrDrawerHeader>
          <DialogOrDrawerTitle>New Note</DialogOrDrawerTitle>
          <DialogOrDrawerDescription>Record your thoughts and ideas in a new note</DialogOrDrawerDescription>
        </DialogOrDrawerHeader>
        <form className="space-y-4" onSubmit={createNote}>
          <Input placeholder="Title" name="title" required disabled={isLoading} />
          <Button className="w-full" disabled={isLoading} isLoading={isLoading}>
            Create
          </Button>
        </form>
      </DialogOrDrawerContent>
    </DialogOrDrawer>
  );
}
