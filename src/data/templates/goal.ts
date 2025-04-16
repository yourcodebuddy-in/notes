import GoalSettingImg from "@/assets/templates/goal-setting.png";

export const goalSettingTemplate = {
  id: "goal-setting",
  title: "Goal Setting",
  description: "Define your personal and professional goals, break them down into steps, and track your progress.",
  thumbnail: GoalSettingImg,
  content: {
    blocks: [
      {
        type: "header",
        data: {
          level: 2,
          text: "My Current Goals",
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Professional Goal:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Achieve a promotion to Senior Marketing Manager by the end of Q3 2025.",
        },
      },
      {
        type: "header",
        data: {
          level: 4,
          text: "Action Steps:",
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
            "Complete the advanced marketing certification by June 30th.",
            "Lead at least two successful marketing campaigns.",
            "Seek mentorship from the current Senior Marketing Manager.",
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 4,
          text: "Target Date:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "September 30, 2025",
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
          text: "Personal Goal:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Run a 5k race by the end of this year.",
        },
      },
      {
        type: "header",
        data: {
          level: 4,
          text: "Action Steps:",
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
            "Follow a consistent running schedule 3 times a week.",
            "Gradually increase running distance each week.",
            "Participate in at least one practice race.",
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 4,
          text: "Target Date:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "December 31, 2025",
        },
      },
    ],
  },
};
