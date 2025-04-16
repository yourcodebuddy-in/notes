"use client";
import { IconCirclePlusFilled } from "@tabler/icons-react";
import { useState } from "react";
import { NewPageFormDialog } from "./new-page-form-dialog";
import { Button } from "./ui/button";

export function NewPageButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="justify-start group-data-[state=collapsed]:p-1.5"
        title="New page"
        onClick={() => setOpen(true)}
      >
        <IconCirclePlusFilled className="!size-5" />
        <span className="group-data-[state=collapsed]:hidden">New page</span>
      </Button>
      <NewPageFormDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
