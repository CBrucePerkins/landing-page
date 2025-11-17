import StudioSetup from "@/public/assests/StudioSetup.gif";
import PracticeSheet from "@/public/assests/PracticerSheet.gif";
import PaymentTracking from "@/public/assests/Payments.gif";

export const featureData = {
  students: {
    title: "Students & Classes",
    description:
      "Manage students, organize classes, and track lesson history from one intuitive dashboard.",
    image: StudioSetup, // optional
    details: `
      • Add, remove, and edit students  
      • Group students into classes  
      • Track lesson progress, attendance, and notes  
      • Centralized student profiles  
    `,
  },

  scheduling: {
    title: "Smart Scheduling",
    description:
      "Plan recurring lessons, one-off sessions, and automated reminders that keep everyone on track.",
    image: PracticeSheet,
    details: `
      • Weekly & monthly view  
      • Automated reminders  
      • Sync with Google Calendar  
      • Conflict detection  
    `,
  },

  practice: {
    title: "Practice Sheets & Materials",
    description:
      "Upload sheet music, assign practice items, and engage students with daily practice tracking.",
    image: PracticeSheet,
    details: `
      • Upload images, PDFs, videos, and audio  
      • Assign practice items  
      • Students log practice minutes  
      • Teacher progress dashboard  
    `,
  },

  payments: {
    title: "Payments Made Simple",
    description:
      "Get paid faster with Stripe Connect. Send invoices, track payments, and manage tuition.",
    image: PaymentTracking,
    details: `
      • Stripe Connect integration  
      • Auto-generated invoices  
      • Payment reminders  
      • Transaction dashboard  
    `,
  },
};
