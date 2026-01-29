import StudentsAndClasses from "@/public/assests/Students-classes.png";
import Schedules from "@/public/assests/NewCalendar.png";
import PracticeSheets from "@/public/assests/PracticeSheet.png";
import Payments from "@/public/assests/Payments.png";

export const featureData = {
  students: {
    title: "Students & Classes",
    description:
      "Manage students, organize classes, and track lesson history from one intuitive dashboard.",
    image: StudentsAndClasses, // optional
    details: [
      "Add, remove, and edit students",
      "Group students into classes",
      "Track lesson progress, attendance, and notes",
      "Centralized student profiles"
    ],
  },

  scheduling: {
    title: "Smart Scheduling",
    description:
      "Plan recurring lessons, one-off sessions, and automated reminders that keep everyone on track.",
    image: Schedules,
    details: [
      "Weekly & monthly view",
      "Conflict detection"
    ],
  },

  practice: {
    title: "Practice Sheets & Materials",
    description:
      "Upload sheet music, assign practice items, and engage students with daily practice tracking.",
    image: PracticeSheets,
    details: [
      "Upload images, PDFs, videos, and audio",
      "Assign practice items",
      "Students log practice minutes",
      "Teacher progress dashboard"
    ]
  },

  payments: {
    title: "Payments Made Simple",
    description:
      "Get paid faster with Stripe Connect. Send invoices, track payments, and manage tuition.",
    image: "/assets/modal-payments.png",
    details: `
      • Stripe Connect integration  
      • Auto-generated invoices  
      • Payment reminders  
      • Transaction dashboard  
    `,
  },

  messages: {
    title: "Send messages to your students",
    description:
      "Send e-mail and SMS messages to individual students or entire classes.",
    image: "/assets/modal-payments.png",
    details: `
      • Send e-mail and SMS messages
      • Send bulk messages to classes or your entire student roster 
    `,
  },
};
