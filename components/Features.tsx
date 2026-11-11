import { MdCalendarMonth, MdQueueMusic, MdPayments, MdForum, MdCheck } from "react-icons/md";
import { PhoneFrame } from "./Frames";
import Reveal from "./Reveal";
import Screen from "./Screen";
import SectionHeading from "./SectionHeading";

// Each claim here matches something the app does today. Keep it that way:
// a feature that's only planned belongs in the FAQ as "coming", not here.
const FEATURES = [
  {
    icon: MdCalendarMonth,
    label: "Schedule & students",
    title: "See your week at a glance",
    body: "Every lesson and class on one calendar, with weekly lessons that repeat on their own. Add a student in seconds and invite them by email, text or QR code.",
    points: ["Weekly lessons, classes and one-off events", "Drag a student into a class", "Syncs to your phone's calendar"],
    shot: { name: "schedule", label: "Teacher · Calendar day", alt: "A day of lessons and classes in the MusiOS calendar" },
  },
  {
    icon: MdQueueMusic,
    label: "Practice",
    title: "Practice that actually happens",
    body: "Assign this week's pieces and scales with a daily goal. Students log their reps on their phone, and you can see who's on track before the lesson, not during it.",
    points: ["On track or behind, for every student and class", "Attach sheet music and recordings", "A shared library of your files"],
    shot: { name: "practice", label: "Teacher · Practice roster", alt: "The practice overview showing which students are on track this week" },
  },
  {
    icon: MdPayments,
    label: "Payments",
    title: "Get paid without chasing",
    body: "Request a payment from one student or a whole class. They pay by card in a tap, you see who still owes you, and a reminder is one button away.",
    points: ["Card payments through Stripe, paid out to your bank", "Reminders, plus a pay link to send any way you like", "Record cash and bank transfers too"],
    shot: { name: "payments", label: "Teacher · Payments, Unpaid", alt: "Outstanding payments and who still owes, in MusiOS" },
  },
  {
    icon: MdForum,
    label: "Messages",
    title: "Reach everyone in seconds",
    body: "Message a student, a class or your whole studio, in the app and by email. Need to text? Send from your own phone, one student after another, without copying numbers.",
    points: ["See who got it, and resend any email that failed", "Texts come from your number, sent individually", "One history of everything you've sent"],
    shot: { name: "messages", label: "Teacher · Messages", alt: "Sent messages with delivery status in MusiOS" },
  },
];

const Features = () => (
  <section id="features" className="bg-white py-24 sm:py-28">
    <div className="mx-auto max-w-6xl px-5">
      <Reveal>
        <SectionHeading eyebrow="Features" title="Your whole studio, in your pocket">
          The admin around your lessons, handled in a few taps.
        </SectionHeading>
      </Reveal>

      <div className="mt-20 space-y-24 sm:space-y-28">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title}>
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <div className={i % 2 ? "md:order-2" : undefined}>
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  <f.icon className="h-5 w-5" aria-hidden />
                  {f.label}
                </p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-ink [text-wrap:balance] sm:text-4xl">{f.title}</h3>
                <p className="mt-4 text-lg text-slate-600 [text-wrap:pretty]">{f.body}</p>
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700">
                      <MdCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center rounded-[2rem] bg-gradient-to-br from-brand-soft to-indigo-50 px-6 py-12">
                <PhoneFrame className="w-[230px] sm:w-[250px]">
                  <Screen {...f.shot} sizes="250px" />
                </PhoneFrame>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
