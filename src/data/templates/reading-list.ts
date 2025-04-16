import ReadingListImg from "@/assets/templates/reading-list.png";

export const readingListTemplate = {
  id: "reading-list",
  title: "Reading List",
  description:
    "Organize the books you want to read, are currently reading, or have finished, along with your thoughts.",
  thumbnail: ReadingListImg,
  content: {
    blocks: [
      {
        type: "header",
        data: {
          level: 2,
          text: "My Reading List",
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Currently Reading:",
        },
      },
      {
        type: "table",
        data: {
          content: [
            ["Title", "Author", "Notes"],
            ["Project Hail Mary", "Andy Weir", "Really enjoying the problem-solving."],
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Completed Books:",
        },
      },
      {
        type: "table",
        data: {
          content: [
            ["Title", "Author", "Rating"],
            ["Sapiens", "Yuval Noah Harari", "4/5"],
            ["The Martian", "Andy Weir", "5/5"],
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "To Read:",
        },
      },
      {
        type: "table",
        data: {
          content: [
            ["Title", "Author", "Priority"],
            ["Deep Work", "Cal Newport", "High"],
            ["Atomic Habits", "James Clear", "Medium"],
          ],
        },
      },
    ],
  },
};
