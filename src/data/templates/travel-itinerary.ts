import TravelItineraryImg from "@/assets/templates/travel-itinerary.png";

export const travelItineraryTemplate = {
  id: "travel-itinerary",
  title: "Travel Itinerary",
  description:
    "Plan and manage your trips with flight details, accommodations, daily schedules, and important information.",
  thumbnail: TravelItineraryImg,
  content: {
    blocks: [
      {
        type: "header",
        data: {
          level: 2,
          text: "Trip to Bali: May 5 - May 12, 2025",
        },
      },
      {
        type: "table",
        data: {
          content: [
            ["Destination:", "Bali, Indonesia"],
            ["Dates:", "May 5, 2025 - May 12, 2025"],
            ["Purpose:", "Vacation"],
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Flights:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "May 5: [Your City] to Denpasar (DPS) - Flight GA 407 (08:00 - 19:00)",
            "May 12: Denpasar (DPS) to [Your City] - Flight GA 406 (21:00 - 07:00 +1 day)",
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Accommodation:",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Ubud Paradise Resort - Check-in: May 5, Check-out: May 9",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Seminyak Beach Villas - Check-in: May 9, Check-out: May 12",
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Daily Itinerary:",
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
            "May 5: Arrival in Ubud, check-in, relax.",
            "May 6: Ubud Monkey Forest, Tegalalang Rice Terraces.",
            "May 7: Cooking class, Ubud Art Market.",
            "May 8: Day trip to Tanah Lot Temple.",
            "May 9: Check-out Ubud, travel to Seminyak, beach time.",
            "May 10: Seminyak beach, sunset cocktails.",
            "May 11: Spa day, shopping.",
            "May 12: Check-out, travel to airport for departure.",
          ],
        },
      },
    ],
  },
};
