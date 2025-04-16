"use client";
import { IconCirclePlusFilled } from "@tabler/icons-react";
import { useState } from "react";
import { NewPageFormDialog } from "./new-page-form-dialog";
import { Button } from "./ui/button";

interface Props {
  variant?: "ghost" | "default";
}

export function NewPageButton({ variant = "ghost" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        className="justify-start group-data-[state=collapsed]:p-1.5"
        title="New workspace"
        onClick={() => setOpen(true)}
      >
        <IconCirclePlusFilled className="!size-5" />
        <span className="group-data-[state=collapsed]:hidden">New workspace</span>
      </Button>
      <NewPageFormDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
