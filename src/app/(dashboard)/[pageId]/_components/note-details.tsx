"use client";
import { updateNote } from "@/db/actions";
import { calculateReadTime, parseEditorJSContentToExcerpt } from "@/lib/editorjs";
import EditorJS from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { NoteActions } from "./note-actions";
const NoteEditor = dynamic(() => import("@/components/note-editor"), { ssr: false });

interface Props {
  id: string;
  content: string;
  pinned: boolean;
}

export function NoteDetails({ id, content, pinned }: Props) {
  const [needsSaving, setNeedsSaving] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const editorRef = useRef<EditorJS | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleSave() {
    if (isSaving) return;

    try {
      setIsSaving(true);
      const data = await editorRef.current?.save();
      if (!data) return;
      const excerpt = parseEditorJSContentToExcerpt(data);
      const readTime = calculateReadTime(data);
      await updateNote({ id, content: JSON.stringify(data), excerpt, readTime });
      setNeedsSaving(false);
    } catch (_error) {
      toast.error("Failed to save note");
    } finally {
      setIsSaving(false);
    }
  }

  function handleChange() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setNeedsSaving(true);
    timeoutRef.current = setTimeout(handleSave, 3000);
  }

  return (
    <div className="max-w-[650px] mx-auto h-full">
      <p className="text-sm text-muted-foreground">
        {needsSaving && !isSaving ? "Unsaved changes" : isSaving ? "Saving..." : "Saved"}
      </p>
      <NoteEditor ref={editorRef} defaultContent={content} onChange={handleChange} />
      <NoteActions id={id} content={content} pinned={pinned} className="absolute top-2 right-2" />
    </div>
  );
}
