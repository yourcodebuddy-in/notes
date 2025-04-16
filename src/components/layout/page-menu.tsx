"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deletePage } from "@/db/actions";
import { Page } from "@/db/types";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { EditPageFormDialog } from "../edit-page-form-dialog";

interface Props {
  children: React.ReactNode;
  page: Page;
}

export function PageMenu({ page, children }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  async function handleDeletePage() {
    const toastId = toast.loading("Deleting page...");
    try {
      await deletePage(page.id);
      router.refresh();
      toast.success("Page deleted", { id: toastId });
    } catch (_error) {
      toast.error("Failed to delete page", { id: toastId });
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="bottom">
        <DropdownMenuItem onSelect={() => setOpen(true)}>
          <IconEdit /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleDeletePage}>
          <IconTrash /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
      <EditPageFormDialog open={open} onOpenChange={setOpen} page={page} />
    </DropdownMenu>
  );
}
