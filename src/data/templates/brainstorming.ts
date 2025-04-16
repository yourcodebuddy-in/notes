import BrainstormingImg from "@/assets/templates/brainstorming.png";

export const brainstormingTemplate = {
  id: "brainstorming",
  title: "Brainstorming",
  description: "Generate and organize ideas for projects, problems, or creative endeavors in a structured way.",
  thumbnail: BrainstormingImg,
  content: {
    blocks: [
      {
        type: "header",
        data: {
          level: 2,
          text: "Project Ideas: Website Redesign",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Let's generate some initial concepts for the website redesign project. No idea is a bad idea! - Brainstorming Focus",
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Initial Ideas:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "Modern and clean design",
            "Improved user navigation",
            "Mobile-first approach",
            "Integration with social media",
            "Enhanced search functionality",
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
          text: "Potential Themes:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "Minimalist aesthetic",
            "Bold and vibrant colors",
            "Interactive elements",
            "Focus on user experience",
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
          text: "Next Steps:",
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
            "Review and categorize all ideas.",
            "Vote on the top 3 themes.",
            "Assign team members to explore each theme further.",
          ],
        },
      },
    ],
  },
};
