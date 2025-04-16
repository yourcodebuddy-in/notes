"use client";
import { Button } from "@/components/ui/button";
import { Page } from "@/db/types";
import { useState } from "react";
import { CloneNoteFormDialog } from "./clone-note-form-dialog";

interface Props {
  pages: Pick<Page, "id" | "title">[];
}

export function CloneNoteButton({ pages }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Clone</Button>
      <CloneNoteFormDialog pages={pages} open={open} onOpenChange={setOpen} />
    </div>
  );
}
