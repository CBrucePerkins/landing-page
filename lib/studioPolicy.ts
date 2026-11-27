// The free studio policy template at /studio-policy-template.
// Adapted from the starting template inside the app (frontend/src/utils/policy.js
// in the musios repo), but tool-neutral, so a teacher can use it anywhere.
// Bodies use the app's plain-text format: a blank line starts a new
// paragraph, and lines starting "- " are bullet points. Anything still in
// [square brackets] is a blank the teacher has left to fill in.

export type PolicyOptions = {
  studioName: string;
  effectiveDate: string; // yyyy-mm-dd from <input type="date">, or ""
  billing: "monthly" | "term";
  dueDays: string;
  payBy: string;
  lateDays: string;
  noticeHours: string;
  makeups: string;
  replyDays: string;
  contactBy: string;
  phone: string;
  leaveNotice: "two-weeks" | "one-month" | "end-of-term";
  classes: boolean;
  minors: boolean;
  recording: boolean;
  signature: boolean;
};

export const DEFAULT_OPTIONS: PolicyOptions = {
  studioName: "",
  effectiveDate: "",
  billing: "monthly",
  dueDays: "14",
  payBy: "bank transfer or card",
  lateDays: "30",
  noticeHours: "24",
  makeups: "2",
  replyDays: "2",
  contactBy: "email",
  phone: "",
  leaveNotice: "one-month",
  classes: false,
  minors: true,
  recording: true,
  signature: true,
};

export type PolicySection = { heading: string; body: string };
export type Policy = { title: string; intro: string; sections: PolicySection[]; signature: string[] | null };

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const count = (raw: string) => {
  const n = parseInt(raw, 10);
  return Number.isFinite(n) && n >= 0 ? n : null;
};
const asWord = (n: number) => WORDS[n] ?? String(n);
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
const fill = (raw: string, blank: string) => raw.trim() || `[${blank}]`;

const formatDate = (iso: string) => {
  if (!iso) return "[date]";
  const d = new Date(`${iso}T12:00:00`);
  return Number.isNaN(d.getTime())
    ? "[date]"
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
};

export function buildPolicy(o: PolicyOptions): Policy {
  const studio = fill(o.studioName, "Studio name");
  const due = count(o.dueDays);
  const late = count(o.lateDays);
  const hours = count(o.noticeHours);
  const makeups = count(o.makeups);
  const reply = count(o.replyDays);

  const dueText = due === null ? "[number] days" : plural(due, "day", "days");
  const lateText = late === null ? "[number] days" : plural(late, "day", "days");
  const noticeText = hours === null ? "[number] hours" : plural(hours, "hour", "hours");
  const noticePossessive = hours === 1 ? "1 hour's" : `${hours ?? "[number]"} hours'`;
  const replyText = reply === null ? "[number] working days" : plural(reply, "working day", "working days");
  const offersMakeups = makeups === null || makeups > 0;

  const sections: PolicySection[] = [
    {
      heading: "Private lessons",
      body:
        "Private lessons are held weekly at the time we agree when you join. Please arrive on time: a lesson that starts late because of a late arrival still ends at the usual time.\n\n" +
        "Please bring your instrument, books and practice notes to every lesson.",
    },
  ];

  if (o.classes) {
    sections.push({
      heading: "Classes and groups",
      body: "Classes run on a fixed schedule for the whole term. A missed class can't be made up individually, but I'll share the class materials so you can catch up.",
    });
  }

  sections.push(
    {
      heading: "Fees and payment",
      body:
        `Lesson fees are billed ${o.billing === "term" ? "at the start of each term" : "monthly"} in advance and are due within ${dueText}.\n\n` +
        `- You can pay by ${fill(o.payBy, "ways to pay")}.\n` +
        "- Fees reserve your weekly lesson time, so they're not reduced for lessons you miss.\n" +
        `- If a payment is more than ${lateText} late, lessons may be paused until it's settled.`,
    },
    {
      heading: "Cancellations and missed lessons",
      body:
        `Please let me know at least ${noticeText} before a lesson if you can't make it.\n\n` +
        (offersMakeups
          ? `- Lessons canceled with at least ${noticePossessive} notice can be made up (see Make-up lessons).\n`
          : "- Lessons you cancel aren't made up or refunded, because fees reserve your weekly time. Giving notice lets me offer the time to someone else.\n") +
        "- Lessons missed without notice are charged and not made up.\n" +
        "- If I have to cancel a lesson, I'll offer a make-up or a credit on your next bill.",
    }
  );

  if (offersMakeups) {
    sections.push({
      heading: "Make-up lessons",
      body: `Make-up lessons are offered when a time is free, up to ${makeups === null ? "[number]" : asWord(makeups)} per term, and must be used within the same term. They can't be carried over or refunded.`,
    });
  }

  sections.push(
    {
      heading: "Holidays and term breaks",
      body: "There are no lessons on public holidays or during the term breaks I share at the start of each term. Fees already take these into account.",
    },
    {
      heading: "Communication",
      body:
        `Please send messages and lesson changes by ${fill(o.contactBy, "email, text or app")}. I aim to reply within ${replyText}. ` +
        `For cancellations on the day of a lesson, please also call or text me on ${fill(o.phone, "phone number")}.`,
    }
  );

  if (o.minors) {
    sections.push({
      heading: "Students under 18",
      body: "For students under 18, a parent or guardian agrees to this policy on their behalf and is responsible for fees and for getting them to and from lessons.",
    });
  }

  if (o.recording) {
    sections.push({
      heading: "Photos and video",
      body: "I may record parts of lessons to help with practice. Recordings are shared only with you and are never posted publicly without your written permission.",
    });
  }

  sections.push(
    {
      heading: "Leaving the studio",
      body:
        o.leaveNotice === "end-of-term"
          ? "Please let me know before the end of a term if you'd like to stop lessons. Lessons and fees continue until the end of that term."
          : `Please give ${o.leaveNotice === "two-weeks" ? "two weeks'" : "one month's"} notice if you'd like to stop lessons. Fees for the notice period are still due.`,
    },
    {
      heading: "Changes to this policy",
      body: "If I change this policy, I'll send you the new version before it applies.",
    }
  );

  return {
    // "Riverside Guitar Studio policy", not "... Studio studio policy".
    title: /studio$/i.test(studio) ? `${studio} policy` : `${studio} studio policy`,
    // "with", so it reads well with a studio name or a teacher's own name.
    intro: `This policy explains how lessons, fees and cancellations work with ${studio}. Please read it before your first lesson. It applies from ${formatDate(o.effectiveDate)}.`,
    sections,
    signature: o.signature
      ? [
          "I have read and agree to this studio policy.",
          "Student name: ______________________________",
          "Parent or guardian (if under 18): ______________________________",
          "Signature: ______________________________   Date: ______________",
        ]
      : null,
  };
}

// Paragraphs and bullet lists from the plain-text body format.
export type Block = { kind: "p"; text: string } | { kind: "ul"; items: string[] };
export function blocks(body: string): Block[] {
  return body.split(/\n{2,}/).map((chunk) => {
    const lines = chunk.split("\n");
    return lines.every((l) => l.startsWith("- "))
      ? { kind: "ul", items: lines.map((l) => l.slice(2)) }
      : { kind: "p", text: chunk };
  });
}

export function policyToText(p: Policy): string {
  const parts = [p.title.toUpperCase(), p.intro];
  for (const s of p.sections) parts.push(`${s.heading.toUpperCase()}\n\n${s.body}`);
  if (p.signature) parts.push(`AGREEMENT\n\n${p.signature.join("\n\n")}`);
  return parts.join("\n\n") + "\n";
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Rich text for the clipboard, so pasting into Word or Google Docs keeps
// the headings and bullet points.
export function policyToHtml(p: Policy): string {
  const out = [`<h1>${esc(p.title)}</h1>`, `<p>${esc(p.intro)}</p>`];
  for (const s of p.sections) {
    out.push(`<h2>${esc(s.heading)}</h2>`);
    for (const b of blocks(s.body)) {
      out.push(b.kind === "p" ? `<p>${esc(b.text)}</p>` : `<ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`);
    }
  }
  if (p.signature) out.push(`<h2>Agreement</h2>`, ...p.signature.map((l) => `<p>${esc(l)}</p>`));
  return out.join("\n");
}
