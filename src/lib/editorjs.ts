import { OutputData } from "@editorjs/editorjs";

export function parseEditorJSContent(data: OutputData): string {
  if (!data?.blocks?.length) {
    return "";
  }

  const excerpt = data.blocks
    .filter((block) => {
      // Only include text-based blocks
      return ["paragraph", "header", "list"].includes(block.type);
    })
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return block.data.text;
        case "header":
          return block.data.text;
        case "list":
          // Handle list items which are objects with content property
          return (
            block.data.items
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ?.map((item: any) => {
                // Strip HTML tags from content
                return item.content?.replace(/<[^>]*>/g, "") || "";
              })
              .join(" ")
          );
        default:
          return "";
      }
    })
    .filter(Boolean)
    .join(" ")
    .slice(0, 200);

  return excerpt.length < 200 ? excerpt : `${excerpt.trim()}...`;
}

export function parseEditorJSToText(data: OutputData): string {
  if (!data?.blocks?.length) {
    return "";
  }

  return data.blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return block.data.text + "\n\n";

        case "header":
          // Add extra # based on header level
          const headerLevel = block.data.level;
          const prefix = "#".repeat(headerLevel) + " ";
          return prefix + block.data.text + "\n\n";

        case "list": {
          const isOrdered = block.data.style === "ordered";
          return (
            block.data.items
              .map((item: { content: string }, index: number) => {
                // For ordered lists use numbers, for unordered use bullet points
                const prefix = isOrdered ? `${index + 1}. ` : "• ";
                return prefix + (item.content?.replace(/<[^>]*>/g, "") || "");
              })
              .join("\n") + "\n\n"
          );
        }

        case "delimiter":
          return "---\n\n";

        case "quote":
          return `> ${block.data.text}\n\n`;

        case "code":
          return `\`\`\`\n${block.data.code}\n\`\`\`\n\n`;

        case "table": {
          return block.data.content.map((row: string[]) => row.join("\t")).join("\n") + "\n\n";
        }

        default:
          return "";
      }
    })
    .join("")
    .trim();
}

export function calculateReadTime(content: OutputData): number {
  // Average reading speed (words per minute)
  const WORDS_PER_MINUTE = 200;
  // Convert to words per second
  const WORDS_PER_SECOND = WORDS_PER_MINUTE / 60;

  try {
    // Parse the content if it's a JSON string
    const data = typeof content === "string" ? JSON.parse(content) : content;

    // Get plain text from EditorJS data
    const text = parseEditorJSToText(data);

    // Count words (split by whitespace and filter empty strings)
    const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;

    // Calculate read time in seconds
    const readTimeSeconds = Math.ceil(wordCount / WORDS_PER_SECOND);

    return readTimeSeconds;
  } catch (_error) {
    // Return 0 if there's an error parsing the content
    return 0;
  }
}
