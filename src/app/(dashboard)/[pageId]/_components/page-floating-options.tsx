"use client";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NewNoteFormDialog } from "./new-note-form-dialog";

interface Props {
  pageId: string;
}

export function PageFloatingOptions({ pageId }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleNoteCreated() {
    router.refresh();
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button size="icon" className="rounded-full !size-10" onClick={() => setOpen(true)}>
        <IconPlus />
      </Button>
      <NewNoteFormDialog open={open} onOpenChange={setOpen} pageId={pageId} onSuccess={handleNoteCreated} />
    </div>
  );
}
