import { updateNote } from "@/db/actions";
import { parseEditorJSToText } from "@/lib/editorjs";
import { cn } from "@/lib/utils";
import { IconCopy, IconDownload, IconPin, IconPinned, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../../../../components/ui/button";

interface Props {
  id: string;
  content: string;
  pinned: boolean;
  className?: string;
}

export function NoteActions({ id, content, pinned, className }: Props) {
  const [isCopying, setIsCopying] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPinning, setIsPinning] = useState(false);
  const [isPinned, setIsPinned] = useState(pinned);
  const router = useRouter();

  async function pinNote() {
    try {
      setIsPinning(true);
      await updateNote({ id, pinned: !pinned });
      setIsPinned(!pinned);
      router.refresh();
      toast.success(`Note ${isPinned ? "unpinned" : "pinned"} successfully`);
    } catch (_error) {
      toast.error(`Failed to ${isPinned ? "unpin" : "pin"} note`);
    } finally {
      setIsPinning(false);
    }
  }

  async function copyNote() {
    try {
      setIsCopying(true);
      const text = parseEditorJSToText(JSON.parse(content));
      await navigator.clipboard.writeText(text);
    } catch (_error) {
      toast.error("Failed to copy note");
    } finally {
      setIsCopying(false);
    }
  }

  async function downloadNote() {
    try {
      setIsDownloading(true);
      const text = parseEditorJSToText(JSON.parse(content));
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${id}.txt`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Note downloaded successfully");
    } catch (_error) {
      toast.error("Failed to download note");
    } finally {
      setIsDownloading(false);
    }
  }

  async function deleteNote() {
    try {
      setIsDeleting(true);
      await updateNote({ id, status: "trashed" });
      toast.success("Note deleted successfully");
      router.replace("?");
    } catch (_error) {
      toast.error("Failed to delete note");
    } finally {
      setIsDeleting(false);
    }
  }
  return (
    <div className={cn("flex", className)}>
      <Button variant="ghost" size="icon" title="Pin" onClick={pinNote} disabled={isPinning} isLoading={isPinning}>
        {isPinned ? <IconPinned /> : <IconPin />}
      </Button>
      <Button variant="ghost" size="icon" title="Copy" onClick={copyNote} disabled={isCopying} isLoading={isCopying}>
        <IconCopy />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Download"
        onClick={downloadNote}
        disabled={isDownloading}
        isLoading={isDownloading}
      >
        <IconDownload />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Delete"
        onClick={deleteNote}
        disabled={isDeleting}
        isLoading={isDeleting}
      >
        <IconTrash />
      </Button>
    </div>
  );
}
