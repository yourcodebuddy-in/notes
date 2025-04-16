import DailyJournalImg from "@/assets/templates/daily-journal.png";

export const dailyJournalTemplate = {
  id: "daily-journal",
  title: "Daily Journal",
  description: "Reflect on your day, track gratitude, set intentions, and note achievements for personal growth.",
  thumbnail: DailyJournalImg,
  content: {
    blocks: [
      {
        type: "header",
        data: {
          level: 2,
          text: "Daily Reflection: April 16, 2025",
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Gratitude:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "Feeling grateful for the sunny weather today.",
            "Appreciative of a productive morning at work.",
            "Thankful for a supportive conversation with a colleague.",
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Today's Intentions:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "Complete the first draft of the presentation.",
            "Follow up on pending emails.",
            "Take a short walk during lunch break.",
          ],
        },
      },
      {
        type: "delimiter",
        data: {},
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Evening Review:",
        },
      },
      {
        type: "header",
        data: {
          level: 4,
          text: "Achievements:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: ["Successfully finished the initial presentation draft.", "Responded to all urgent emails."],
        },
      },
      {
        type: "header",
        data: {
          level: 4,
          text: "Challenges:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Felt a bit distracted in the afternoon but managed to refocus.",
        },
      },
      {
        type: "header",
        data: {
          level: 4,
          text: "Lessons Learned:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Taking short breaks can actually improve focus in the long run.",
        },
      },
    ],
  },
};
