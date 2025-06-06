import { Button } from "@/components/ui/button";
import {
  DialogOrDrawer,
  DialogOrDrawerContent,
  DialogOrDrawerDescription,
  DialogOrDrawerHeader,
  DialogOrDrawerTitle,
} from "@/components/ui/dialog-or-drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { templates } from "@/data/templates";
import { createNote as createNoteAction } from "@/db/actions";
import { calculateReadTime, parseEditorJSContentToExcerpt } from "@/lib/editorjs";
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
  const [templateId, setTemplateId] = useState("blank");

  async function createNote(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setIsLoading(true);
      const formData = new FormData(e.target as HTMLFormElement);
      const title = formData.get("title") as string | null;
      if (!title) return;

      const template = templates.find((t) => t.id === templateId);
      if (!template && templateId !== "blank") {
        toast.error("Invalid template");
        return;
      }

      const data: { title: string; pageId: string; content?: string; excerpt?: string; readTime?: number } = {
        title,
        pageId,
      };

      if (templateId !== "blank" && template) {
        data.content = JSON.stringify(template.content);
        data.excerpt = parseEditorJSContentToExcerpt(template.content);
        data.readTime = calculateReadTime(template.content);
      }

      await createNoteAction(data);
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
          <Label>Title</Label>
          <Input placeholder="Title" name="title" required disabled={isLoading} />
          <Label>Template</Label>
          <Select value={templateId} onValueChange={setTemplateId}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blank">Blank</SelectItem>
              {templates.map((template) => (
                <SelectItem key={template.title} value={template.id}>
                  {template.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="w-full" disabled={isLoading} isLoading={isLoading}>
            Create
          </Button>
        </form>
      </DialogOrDrawerContent>
    </DialogOrDrawer>
  );
}
