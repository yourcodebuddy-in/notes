import { Button } from "@/components/ui/button";
import {
  DialogOrDrawer,
  DialogOrDrawerContent,
  DialogOrDrawerDescription,
  DialogOrDrawerHeader,
  DialogOrDrawerTitle,
} from "@/components/ui/dialog-or-drawer";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { templates } from "@/data/templates";
import { createNote } from "@/db/actions";
import { Page } from "@/db/types";
import { calculateReadTime, parseEditorJSContentToExcerpt } from "@/lib/editorjs";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pages: Pick<Page, "id" | "title">[];
}

export function CloneNoteFormDialog({ open, onOpenChange, pages }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [templateId, setTemplateId] = useState("");
  const [pageId, setPageId] = useState("");

  async function cloneTemplateToNote(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const template = templates.find((t) => t.id === templateId);
      if (!template) {
        toast.error("Invalid template");
        return;
      }
      const excerpt = parseEditorJSContentToExcerpt(template.content);
      const readTime = calculateReadTime(template.content);
      await createNote({
        title: template.title,
        pageId,
        content: JSON.stringify(template.content),
        excerpt,
        readTime,
      });
      onOpenChange(false);
    } catch (_error) {
      toast.error("Failed to clone template");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DialogOrDrawer open={open} onOpenChange={onOpenChange}>
      <DialogOrDrawerContent>
        <DialogOrDrawerHeader>
          <DialogOrDrawerTitle>Clone Template</DialogOrDrawerTitle>
          <DialogOrDrawerDescription>Create a new note from a template.</DialogOrDrawerDescription>
        </DialogOrDrawerHeader>
        <form className="space-y-4" onSubmit={cloneTemplateToNote}>
          <Label>Template</Label>
          <Select value={templateId} onValueChange={setTemplateId}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a template" />
            </SelectTrigger>
            <SelectContent>
              {templates.map((template) => (
                <SelectItem key={template.title} value={template.id}>
                  {template.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Label>Workspace</Label>
          <Select value={pageId} onValueChange={setPageId}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a workspace" />
            </SelectTrigger>
            <SelectContent>
              {pages.map((page) => (
                <SelectItem key={page.id} value={page.id}>
                  {page.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="w-full" disabled={isLoading} isLoading={isLoading}>
            Confirm
          </Button>
        </form>
      </DialogOrDrawerContent>
    </DialogOrDrawer>
  );
}
