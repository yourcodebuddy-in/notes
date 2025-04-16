import SimpleNoteImg from "@/assets/templates/simple-note.png";

export const simpleNoteTemplate = {
  id: "simple-note",
  title: "Simple Note",
  description: "Quickly jot down thoughts, ideas, and reminders without a rigid structure.",
  thumbnail: SimpleNoteImg,
  content: {
    blocks: [
      {
        type: "header",
        data: {
          level: 3,
          text: "Quick Note: Ideas for Blog Post",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Just jotting down some quick ideas for the next blog post:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "Top 5 productivity tips for remote workers.",
            "The future of AI in marketing.",
            "A beginner's guide to SEO.",
          ],
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Need to research keywords and outline each topic further.",
        },
      },
    ],
  },
};
