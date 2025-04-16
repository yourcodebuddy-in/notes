import ProjectPlanningImg from "@/assets/templates/project-planning.png";

export const projectPlanningTemplate = {
  id: "project-planning",
  title: "Project Planning",
  description: "Organize project goals, tasks, timelines, and responsibilities for effective management and tracking.",
  thumbnail: ProjectPlanningImg,
  content: {
    blocks: [
      {
        type: "header",
        data: {
          level: 2,
          text: "Website Redesign Project Plan",
        },
      },
      {
        type: "table",
        data: {
          content: [
            ["Project Name:", "Website Redesign"],
            [
              "Objective:",
              "To modernize the website design and improve user experience, leading to increased engagement and conversions.",
            ],
            ["Due Date:", "2025-07-31"],
            ["Status:", "In Progress"],
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Key Outcomes:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "Modern and responsive design implemented.",
            "Improved site navigation and information architecture.",
            "Increased average session duration by 15%.",
            "Mobile traffic conversion rate increased by 10%.",
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Team Roles & Responsibilities:",
        },
      },
      {
        type: "table",
        data: {
          content: [
            ["Role", "Person"],
            ["Project Lead", "John Doe"],
            ["UI/UX Designer", "Jane Smith"],
            ["Front-end Developer", "Peter Jones"],
            ["Content Strategist", "Alice Brown"],
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Milestones:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "Week 1-2: Discovery and Planning (John)",
            "Week 3-5: UI/UX Design (Jane)",
            "Week 6-10: Front-end Development (Peter)",
            "Week 8-11: Content Creation & Migration (Alice)",
            "Week 12: Testing and Deployment (All)",
          ],
        },
      },
    ],
  },
};
