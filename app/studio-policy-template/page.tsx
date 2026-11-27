import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { PhoneFrame } from "@/components/Frames";
import Header from "@/components/Header";
import PolicyBuilder from "@/components/PolicyBuilder";
import Reveal from "@/components/Reveal";
import Screen from "@/components/Screen";
import SectionHeading from "@/components/SectionHeading";
import WaitlistButton from "@/components/WaitlistButton";
import { BETA_START } from "@/lib/beta";

const TITLE = "Music Studio Policy Template: Free and Editable | MusiOS";
const DESCRIPTION =
  "A free studio policy template for music teachers, covering fees, cancellations, make-ups, holidays and notice. Fill in your details, then copy or print it.";

// openGraph replaces the root layout's block rather than merging with it,
// so the shared fields are repeated here. The share image comes from
// opengraph-image.png in this folder.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/studio-policy-template" },
  openGraph: {
    title: "Free music studio policy template",
    description:
      "A ready-to-use policy for private music lessons: fees, cancellations, make-ups, holidays and notice. Fill in your details, then copy, download or print it. No sign-up.",
    url: "https://musios.io/studio-policy-template",
    siteName: "MusiOS",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free music studio policy template",
    description:
      "A ready-to-use policy for private music lessons. Fill in your details, then copy, download or print it. No sign-up.",
  },
};

// Practical reasoning behind each clause, so teachers can change the
// numbers with confidence rather than copying them blindly.
const ADVICE = [
  {
    title: "Charge for the time, not the lesson",
    body: "Billing in advance, and saying that fees aren't reduced for missed lessons, is what makes the rest of the policy work. Your week is built from fixed times, and one left empty at short notice can't be sold to anyone else.",
  },
  {
    title: "Pick a notice period you can act on",
    body: "Notice is only useful if it gives you time to do something: offer the time to another student or rearrange your day. If you can't fill a gap in 24 hours, ask for longer.",
  },
  {
    title: "Limit make-ups, and give them an end date",
    body: "Unlimited make-ups pile up at the end of term and fill the free time you need for yourself. A limit per term, offered only in times you already have free, keeps them manageable.",
  },
  {
    title: "Hold yourself to the same standard",
    body: "Families accept firm rules more easily when yours are just as clear. Say what happens when you cancel: a make-up, or a credit on the next bill.",
  },
  {
    title: "Decide in advance what happens when payment is late",
    body: "When the policy already says when lessons pause, a late-payment conversation is about something you both agreed to, not about you.",
  },
  {
    title: "Have a parent agree for children",
    body: "A child can't agree to pay fees. For students under 18, a parent or guardian should read the policy and accept it, and be the one you contact about payments.",
  },
];

export default function StudioPolicyTemplate() {
  return (
    <>
      <Header onHome={false} current="/studio-policy-template" />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft via-white to-white print:hidden">
          <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-indigo-300/30 blur-3xl" />
          <div className="relative mx-auto max-w-3xl px-5 pb-12 pt-14 text-center md:pt-20">
            <p className="inline-flex rounded-full border border-brand/15 bg-white px-3 py-1 text-sm font-medium text-brand shadow-sm">
              Free for music teachers · No sign-up
            </p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-ink [text-wrap:balance] sm:text-5xl lg:text-6xl">
              Music studio policy template
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 [text-wrap:pretty]">
              A ready-to-use policy for private lessons, covering fees, cancellations, make-up lessons, holidays and
              leaving the studio. Fill in your details and the policy updates as you type. Then copy it into Word or
              Google Docs, download it, or print it.
            </p>
            {/* On phones the form comes first, so offer a way straight to the policy. */}
            <a href="#policy" className="mt-6 inline-block font-semibold text-brand underline-offset-4 hover:underline lg:hidden">
              Read the template first ↓
            </a>
          </div>
        </section>

        <section id="template" aria-label="Studio policy template" className="mx-auto max-w-6xl px-5 pb-20">
          <PolicyBuilder />
          <p className="mt-6 max-w-3xl text-sm text-slate-500 print:hidden">
            This template is a starting point, not legal advice. Rules on consumer contracts, cancellations and notice
            periods differ from country to country, so check what applies where you teach.
          </p>
        </section>

        <section className="bg-slate-50 px-5 py-20 sm:py-24 print:hidden">
          <Reveal>
            <SectionHeading eyebrow="Making it yours" title="How to decide each part">
              The numbers in the template are sensible defaults. Here&apos;s what each part is for, so you can change them
              to suit your studio.
            </SectionHeading>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ADVICE.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.06} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-ink [text-wrap:balance]">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-ink px-5 py-20 text-white sm:py-24 print:hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_auto]">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-indigo-200">Getting it agreed</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight [text-wrap:balance] sm:text-4xl">
                A policy only helps if families have agreed to it
              </h2>
              <p className="mt-5 max-w-xl text-lg text-indigo-100/80 [text-wrap:pretty]">
                Send it before the first lesson, ask for a name and a date, and keep the record. When you change something,
                send the new version and ask again.
              </p>
              <p className="mt-4 max-w-xl text-lg text-indigo-100/80 [text-wrap:pretty]">
                MusiOS does this for you. Students or parents accept your policy in the app, or from an emailed link. You
                see who has accepted which version and when, both of you get a copy by email, and you can ask everyone to
                accept again after a change.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <WaitlistButton size="lg" variant="light" />
                <span className="text-sm text-indigo-100/70">Closed beta starts {BETA_START}.</span>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="mx-auto flex items-end gap-5">
              <PhoneFrame className="w-[150px] sm:w-[200px]" onDark>
                <Screen name="policy" label="Teacher · Studio policy, Acceptance" alt="Who has accepted the studio policy in MusiOS, and who hasn't yet" sizes="200px" />
              </PhoneFrame>
              <PhoneFrame className="mb-10 w-[150px] sm:w-[200px]" onDark>
                <Screen name="student-policy" label="Student · Studio policy, Accept" alt="A teacher's studio policy with the form to accept it" sizes="200px" />
              </PhoneFrame>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
