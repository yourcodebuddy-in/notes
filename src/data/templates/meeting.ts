import MeetingNotesImg from "@/assets/templates/meeting-notes.png";

export const meetingNotesTemplate = {
  id: "meeting-notes",
  title: "Meeting Notes",
  description:
    "Capture key decisions, action items, and discussions during meetings to keep everyone aligned and accountable.",
  thumbnail: MeetingNotesImg,
  content: {
    blocks: [
      {
        type: "header",
        data: {
          level: 2,
          text: "Project Kick-off Meeting",
        },
      },
      {
        type: "table",
        data: {
          content: [
            ["Date:", "April 16, 2025"],
            ["Time:", "10:00 AM - 11:00 AM IST"],
            ["Location:", "Conference Room A"],
            ["Attendees:", "John Doe, Jane Smith, Peter Jones, Alice Brown"],
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Agenda:",
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
            "Project Overview and Goals",
            "Team Roles and Responsibilities",
            "Initial Timeline and Milestones",
            "Communication Plan",
            "Q&A",
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Key Discussions:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "The project aims to develop a new customer onboarding process.",
            "John will be the Project Lead, Jane will handle design, Peter the development, and Alice the documentation.",
            "The initial timeline includes a 4-week design phase followed by 6 weeks of development.",
            "Weekly progress meetings will be held every Monday at 9:00 AM.",
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Action Items:",
        },
      },
      {
        type: "checklist",
        data: {
          items: [
            {
              text: "John to create a detailed project plan.",
              checked: false,
              data: {
                dueDate: "2025-04-19",
                assignee: "John Doe",
              },
            },
            {
              text: "Jane to start initial design mockups.",
              checked: false,
              data: {
                dueDate: "2025-04-23",
                assignee: "Jane Smith",
              },
            },
            {
              text: "Peter to set up the development environment.",
              checked: true,
              data: {
                dueDate: "2025-04-18",
                assignee: "Peter Jones",
              },
            },
          ],
        },
      },
    ],
  },
};
