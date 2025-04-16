import ToDoListImg from "@/assets/templates/todo-list.png";

export const toDoListTemplate = {
  id: "to-do-list",
  title: "To Do List",
  description: "Keep track of your tasks, set deadlines and priorities, and monitor your progress.",
  thumbnail: ToDoListImg,
  content: {
    blocks: [
      {
        type: "header",
        data: {
          level: 2,
          text: "My Tasks for the Week",
        },
      },
      {
        type: "checklist",
        data: {
          items: [
            {
              text: "Finalize marketing strategy document",
              checked: false,
              data: {
                dueDate: "2025-04-18",
                priority: "High",
                category: "Marketing",
                notes: "Need to incorporate feedback from the team.",
              },
            },
            {
              text: "Prepare presentation for client meeting",
              checked: false,
              data: {
                dueDate: "2025-04-19",
                priority: "High",
                category: "Sales",
                notes: "Focus on key benefits and case studies.",
              },
            },
            {
              text: "Review and approve design mockups",
              checked: true,
              data: {
                dueDate: "2025-04-17",
                priority: "Medium",
                category: "Design",
                notes: "Provide detailed feedback to the design team.",
              },
            },
            {
              text: "Schedule follow-up calls with leads",
              checked: false,
              data: {
                dueDate: "2025-04-20",
                priority: "Medium",
                category: "Sales",
                notes: "Prioritize leads from the last campaign.",
              },
            },
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
          text: "Notes:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Remember to prioritize tasks marked as 'High'.",
        },
      },
    ],
  },
};
