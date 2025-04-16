// @ts-expect-error Not Typed correctly
import Checklist from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import EditorJS from "@editorjs/editorjs";
// @ts-expect-error Not Typed correctly
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import InlineCode from "@editorjs/inline-code";
// @ts-expect-error Not Typed correctly
import Link from "@editorjs/link";
import List from "@editorjs/list";
// @ts-expect-error Not Typed correctly
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote";
// @ts-expect-error Not Typed correctly
import Raw from "@editorjs/raw";
// @ts-expect-error Not Typed correctly
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Underline from "@editorjs/underline";
// @ts-expect-error Not Typed correctly
import Strikethrough from "@sotaproject/strikethrough";
import ColorPicker from "editorjs-color-picker";

import { safeJSONParse } from "@/lib/utils";
import { RefObject, useEffect, useRef } from "react";

interface Props {
  defaultContent: string;
  ref: RefObject<EditorJS | null>;
  onReady?: () => void;
  onChange?: () => void;
}

export type NoteEditorStatus = "idle" | "saving" | "saved" | "error";

export function NoteEditor({ defaultContent, ref, onReady, onChange }: Props) {
  const editorContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorContainerRef.current) return;

    if (ref.current) return;
    const editor = new EditorJS({
      holder: editorContainerRef.current,
      data: safeJSONParse(defaultContent),
      placeholder: "Start typing...",
      tools: {
        header: {
          // @ts-expect-error Not Typed correctly
          class: Header,
          inlineToolbar: true,
          config: {
            defaultLevel: 2,
          },
        },
        list: {
          // @ts-expect-error Not Typed correctly
          class: List,
          inlineToolbar: true,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        table: {
          // @ts-expect-error Not Typed correctly
          class: Table,
          inlineToolbar: true,
        },
        delimiter: Delimiter,
        image: SimpleImage,
        linkTool: Link,
        embed: Embed,
        code: Code,
        raw: Raw,
        marker: Marker,
        inlineCode: InlineCode,
        underline: Underline,
        // @ts-expect-error Not Typed correctly
        colorPicker: ColorPicker,
        strikethrough: Strikethrough,
      },
      onReady: () => {
        onReady?.();
      },
      onChange: () => {
        onChange?.();
      },
    });

    ref.current = editor;
  }, [ref, defaultContent, onReady, onChange]);

  return <div className="prose w-full-0" ref={editorContainerRef} />;
}
