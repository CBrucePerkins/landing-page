import { PhoneFrame } from "./Frames";
import Reveal from "./Reveal";
import Screen from "./Screen";
import SectionHeading from "./SectionHeading";

const SCREENS = [
  {
    title: "This week's practice",
    body: "What to practise, the daily goal, and a quick way to log the minutes.",
    shot: { name: "student-practice", label: "Student · Practice", alt: "A student's practice list with minutes logged each day" },
  },
  {
    title: "Sheet music & recordings",
    body: "Everything you've shared, in one place, opened right on their phone.",
    shot: { name: "student-files", label: "Student · Files", alt: "Sheet music and recordings shared with a student" },
  },
  {
    title: "Pay in a tap",
    body: "What's due, and a button to pay it by card. Receipts included.",
    shot: { name: "student-pay", label: "Student · Payments, To pay", alt: "A student's payment due, with a Pay button" },
  },
];

const StudentApp = () => (
  <section id="students" className="bg-ink py-24 text-white sm:py-28">
    <div className="mx-auto max-w-6xl px-5">
      <Reveal>
        <SectionHeading eyebrow="For your students" title="Your students get the app too" dark>
          No more lost practice notebooks or chasing payments by email. Students, or their parents, always know what&apos;s
          next, and can act on it.
        </SectionHeading>
      </Reveal>

      <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
        {SCREENS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="flex flex-col items-center text-center">
            <PhoneFrame className="w-[220px] sm:w-[230px]" onDark>
              <Screen {...s.shot} sizes="230px" />
            </PhoneFrame>
            <h3 className="mt-8 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 max-w-xs text-indigo-100/75">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default StudentApp;
