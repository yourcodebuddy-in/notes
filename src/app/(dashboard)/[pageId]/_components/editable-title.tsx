"use client";
import EditableHeading from "@/components/editable-heading";
import { updateNote } from "@/db/actions";
import { toast } from "sonner";

interface Props {
  id: string;
  title: string;
}

export function EditableTitle({ id, title }: Props) {
  async function updateTitle(title: string) {
    try {
      await updateNote({
        id,
        title: title ?? "Untitled",
      });
    } catch (_error) {
      toast.error("Failed to update title");
    }
  }

  return (
    <EditableHeading as="h1" className="text-lg lg:text-xl font-bold flex-1" onSave={updateTitle}>
      {title}
    </EditableHeading>
  );
}
