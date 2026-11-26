import { MdAttachFile, MdCalendarMonth, MdFamilyRestroom, MdQueueMusic, MdPayments, MdHandshake, MdForum, MdCheck } from "react-icons/md";
import { LandscapePhoneFrame, PhoneFrame } from "./Frames";
import Reveal from "./Reveal";
import Screen from "./Screen";
import SectionHeading from "./SectionHeading";

// Each claim here matches something the app does today. Keep it that way:
// a feature that's only planned belongs in the FAQ as "coming", not here.
const FEATURES = [
  {
    icon: MdAttachFile,
    label: "Videos, music & sheet music",
    title: "Everything they need, right where they practice",
    body: "Upload your demo videos, play-along tracks and sheet music, and attach them to the exact piece or scale you've assigned. Students open it straight from that practice item, so there's nothing to search for in emails or chats.",
    points: [
      "Videos, recordings, PDFs and images, straight from your phone or computer",
      "Upload while you assign the material, or reuse files from your own library",
      "Share with one student or a whole class in a couple of taps",
    ],
    pair: [
      { caption: "You attach it", name: "files-attach", label: "Teacher · Practice item with files", alt: "A teacher adding a demo video, a play-along and sheet music to a practice item in MusiOS" },
      { caption: "They open it", name: "files-open", label: "Student · Practice item, Files", alt: "A student opening the video, play-along and sheet music from that practice item" },
    ],
  },
  {
    icon: MdCalendarMonth,
    label: "Schedule & students",
    title: "See your week at a glance",
    body: "Every lesson and class on one calendar, with weekly lessons that repeat on their own. Add a student in seconds and invite them by email, text or QR code.",
    points: ["My Week: all seven days on one timeline, wider when you turn your phone", "Drag a student into a class", "Syncs to your phone's calendar"],
    shot: { name: "schedule", label: "Teacher · Calendar day", alt: "A day of lessons and classes in the MusiOS calendar" },
    wide: { name: "week", label: "Teacher · My Week, landscape", alt: "My Week on a phone held sideways, with every lesson from Monday to Sunday" },
  },
  {
    icon: MdFamilyRestroom,
    label: "Students & parents",
    title: "For grown-ups, teens and little ones",
    body: "Adults and teens manage their own lessons. For younger students, make a parent or guardian the main contact: they get the invitation, sign in with their own email, and handle payments and your studio policy.",
    points: [
      "Keep the student's details and the parent's apart",
      "Add more contacts, and choose what each one gets by email",
      "Children can sign in too, for practice, files and messages",
    ],
    shot: { name: "guardian", label: "Teacher · Student profile with a main contact", alt: "A student's profile in MusiOS, with their father as the main contact" },
  },
  {
    icon: MdQueueMusic,
    label: "Practice",
    title: "Practice that actually happens",
    body: "Assign this week's pieces and scales with a daily goal. Students log their reps on their phone, and you can see who's on track before the lesson, not during it.",
    points: ["On track or behind, for every student and class", "Set work for one student or a whole class", "Spot who has nothing assigned yet"],
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
    icon: MdHandshake,
    label: "Studio policy",
    title: "Your studio rules, agreed in writing",
    body: "Write down how lessons, payment, cancellations and make-ups work, starting from a template. Students, or their parents, read it and accept it before they carry on, and you keep a dated record of who agreed to what.",
    points: [
      "Accepted in the app or from an emailed link, no sign-in needed",
      "Change it any time, and choose whether everyone accepts again",
      "Every acceptance on record, with a copy emailed to both of you",
    ],
    shot: { name: "policy", label: "Teacher · Studio policy, Acceptance", alt: "Who has accepted the studio policy and who hasn't yet, in MusiOS" },
  },
  {
    icon: MdForum,
    label: "Messages",
    title: "Reach everyone in seconds",
    body: "Message a student, their parents, a class or your whole studio, in the app and by email. Need to text? Send from your own phone, one student after another, without copying numbers.",
    points: ["See who got it, and resend any email that failed", "Texts come from your number, sent individually", "Everything you've sent, person by person"],
    shot: { name: "messages", label: "Teacher · Messages, one student", alt: "Messages sent to one student and their parent in MusiOS, with who got each one" },
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
              <div className="flex flex-col items-center rounded-[2rem] bg-gradient-to-br from-brand-soft to-indigo-50 px-6 py-12">
                {"shot" in f && f.shot && (
                  <PhoneFrame className="w-[230px] sm:w-[250px]">
                    <Screen {...f.shot} sizes="250px" />
                  </PhoneFrame>
                )}
                {/* Both sides of one thing: the teacher's screen and the student's.
                    Side by side only where each phone stays readable. */}
                {"pair" in f && f.pair && (
                  <div className="grid w-full max-w-[470px] justify-items-center gap-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-1 md:gap-10 lg:grid-cols-2 lg:gap-4">
                    {f.pair.map(({ caption, ...shot }) => (
                      <div key={caption}>
                        <PhoneFrame className="w-[230px] sm:w-[220px] md:w-[240px] lg:w-[190px] xl:w-[215px]">
                          <Screen {...shot} sizes="240px" />
                        </PhoneFrame>
                        <p className="mt-4 text-center text-sm font-semibold text-ink">{caption}</p>
                      </div>
                    ))}
                  </div>
                )}
                {/* Overlaps the empty end of the day above it. */}
                {"wide" in f && f.wide && (
                  <LandscapePhoneFrame className="z-10 -mt-24 max-w-[440px] sm:-mt-28">
                    <Screen {...f.wide} sizes="440px" />
                  </LandscapePhoneFrame>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
