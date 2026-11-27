"use client";

import { useEffect, useMemo, useState } from "react";
import { FaCheck, FaDownload, FaPrint, FaRegCopy } from "react-icons/fa";
import {
  DEFAULT_OPTIONS,
  blocks,
  buildPolicy,
  policyToHtml,
  policyToText,
  type PolicyOptions,
} from "@/lib/studioPolicy";

// Remembers what a teacher typed so the template is still filled in when
// they come back. Purely a convenience: if storage is blocked, the page
// just starts from the defaults.
const STORAGE_KEY = "musios-policy-template";

const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[15px] text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-ink">{label}</span>
      {children}
      {hint && <span className="text-xs text-slate-500">{hint}</span>}
    </label>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-[15px] text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-300 accent-brand"
      />
      {label}
    </label>
  );
}

// Blanks still in [square brackets] are highlighted so they're easy to spot.
function WithBlanks({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[[^\]]+\])/).map((part, i) =>
        part.startsWith("[") ? (
          <mark key={i} className="rounded bg-amber-100 px-1 text-amber-900 print:bg-transparent print:px-0 print:text-inherit">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function PolicyBuilder() {
  const [o, setO] = useState<PolicyOptions>(DEFAULT_OPTIONS);
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setO({ ...DEFAULT_OPTIONS, ...JSON.parse(saved) });
    } catch {}
  }, []);

  const set = <K extends keyof PolicyOptions>(key: K, value: PolicyOptions[K]) =>
    setO((prev) => {
      const next = { ...prev, [key]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });

  const policy = useMemo(() => buildPolicy(o), [o]);
  const text = useMemo(() => policyToText(policy), [policy]);
  const blanks = (text.match(/\[[^\]]+\]/g) || []).length;

  const flash = (msg: string) => {
    setStatus(msg);
    window.setTimeout(() => setStatus(""), 2500);
  };

  const copy = async () => {
    try {
      if (typeof ClipboardItem !== "undefined" && navigator.clipboard?.write) {
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/html": new Blob([policyToHtml(policy)], { type: "text/html" }),
            "text/plain": new Blob([text], { type: "text/plain" }),
          }),
        ]);
      } else {
        await navigator.clipboard.writeText(text);
      }
      flash("Copied. Paste it into Word, Google Docs or an email.");
    } catch {
      flash("Your browser blocked copying. Use Download instead.");
    }
  };

  const download = () => {
    const slug = o.studioName.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug ? `${slug}-` : ""}studio-policy.txt`;
    a.click();
    URL.revokeObjectURL(url);
    flash("Downloaded.");
  };

  const btn =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[360px_1fr] lg:gap-10">
      {/* Details */}
      <form
        onSubmit={(e) => e.preventDefault()}
        // Pinned beside the policy on wide screens; it scrolls on its own when
        // it's taller than the window, so every field stays reachable.
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7.5rem)] lg:overflow-y-auto lg:overscroll-contain print:hidden"
        aria-label="Your studio details"
      >
        <h2 className="text-lg font-bold text-ink">Your details</h2>
        <p className="mt-1 text-sm text-slate-600">The policy updates as you type. Leave anything blank to fill in later.</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <Field label="Studio or teacher name">
            <input className={inputCls} value={o.studioName} onChange={(e) => set("studioName", e.target.value)} placeholder="e.g. Riverside Guitar Studio" />
          </Field>
          <Field label="Applies from">
            <input type="date" className={inputCls} value={o.effectiveDate} onChange={(e) => set("effectiveDate", e.target.value)} />
          </Field>
          <Field label="Fees are billed">
            <select className={inputCls} value={o.billing} onChange={(e) => set("billing", e.target.value as PolicyOptions["billing"])}>
              <option value="monthly">Monthly, in advance</option>
              <option value="term">Each term, in advance</option>
            </select>
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Due within" hint="days">
              <input type="number" min={0} inputMode="numeric" className={inputCls} value={o.dueDays} onChange={(e) => set("dueDays", e.target.value)} />
            </Field>
            <Field label="Pause lessons after" hint="days late">
              <input type="number" min={0} inputMode="numeric" className={inputCls} value={o.lateDays} onChange={(e) => set("lateDays", e.target.value)} />
            </Field>
          </div>
          <Field label="Ways to pay">
            <input className={inputCls} value={o.payBy} onChange={(e) => set("payBy", e.target.value)} />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Cancellation notice" hint="hours">
              <input type="number" min={0} inputMode="numeric" className={inputCls} value={o.noticeHours} onChange={(e) => set("noticeHours", e.target.value)} />
            </Field>
            <Field label="Make-ups per term" hint="0 for none">
              <input type="number" min={0} inputMode="numeric" className={inputCls} value={o.makeups} onChange={(e) => set("makeups", e.target.value)} />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Contact me by">
              <input className={inputCls} value={o.contactBy} onChange={(e) => set("contactBy", e.target.value)} />
            </Field>
            <Field label="Reply within" hint="working days">
              <input type="number" min={0} inputMode="numeric" className={inputCls} value={o.replyDays} onChange={(e) => set("replyDays", e.target.value)} />
            </Field>
          </div>
          <Field label="Phone for same-day cancellations">
            <input type="tel" className={inputCls} value={o.phone} onChange={(e) => set("phone", e.target.value)} />
          </Field>
          <Field label="Notice to stop lessons">
            <select className={inputCls} value={o.leaveNotice} onChange={(e) => set("leaveNotice", e.target.value as PolicyOptions["leaveNotice"])}>
              <option value="two-weeks">Two weeks</option>
              <option value="one-month">One month</option>
              <option value="end-of-term">Until the end of the term</option>
            </select>
          </Field>
        </div>

        <fieldset className="mt-6 border-t border-slate-200 pt-5">
          <legend className="sr-only">Sections to include</legend>
          <p className="mb-3 text-sm font-semibold text-ink">Include sections for</p>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            <Toggle label="Group classes" checked={o.classes} onChange={(v) => set("classes", v)} />
            <Toggle label="Students under 18" checked={o.minors} onChange={(v) => set("minors", v)} />
            <Toggle label="Photos and video" checked={o.recording} onChange={(v) => set("recording", v)} />
            <Toggle label="Signature lines" checked={o.signature} onChange={(v) => set("signature", v)} />
          </div>
        </fieldset>

        <button
          type="button"
          onClick={() => {
            setO(DEFAULT_OPTIONS);
            try {
              localStorage.removeItem(STORAGE_KEY);
            } catch {}
          }}
          className="mt-6 text-sm font-medium text-slate-500 underline-offset-4 hover:text-brand hover:underline"
        >
          Reset to the defaults
        </button>
      </form>

      {/* The policy */}
      <div className="min-w-0">
        <div className="mb-4 flex flex-wrap items-center gap-3 print:hidden">
          <button type="button" onClick={copy} className={`${btn} bg-brand text-white shadow-sm hover:bg-brand-dark`}>
            {status.startsWith("Copied") ? <FaCheck aria-hidden /> : <FaRegCopy aria-hidden />} Copy policy
          </button>
          <button type="button" onClick={download} className={`${btn} border border-slate-300 bg-white text-ink hover:border-brand hover:text-brand`}>
            <FaDownload aria-hidden /> Download
          </button>
          <button type="button" onClick={() => window.print()} className={`${btn} border border-slate-300 bg-white text-ink hover:border-brand hover:text-brand`}>
            <FaPrint aria-hidden /> Print or save as PDF
          </button>
          <p className="basis-full text-sm text-slate-500" aria-live="polite">
            {status ||
              (blanks > 0
                ? `${blanks} ${blanks === 1 ? "blank" : "blanks"} left to fill in, highlighted below.`
                : "Every blank is filled in.")}
          </p>
        </div>

        <article
          id="policy"
          className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_30px_60px_-40px_rgba(0,30,128,0.35)] sm:p-10 print:border-0 print:p-0 print:shadow-none"
        >
          <h2 className="text-2xl font-extrabold tracking-tight text-ink [text-wrap:balance] sm:text-3xl">
            <WithBlanks text={policy.title} />
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
            <WithBlanks text={policy.intro} />
          </p>

          {policy.sections.map((s) => (
            <section key={s.heading} className="mt-7 break-inside-avoid">
              <h3 className="text-base font-bold text-ink">{s.heading}</h3>
              {blocks(s.body).map((b, i) =>
                b.kind === "p" ? (
                  <p key={i} className="mt-2 text-[15px] leading-relaxed text-slate-700">
                    <WithBlanks text={b.text} />
                  </p>
                ) : (
                  <ul key={i} className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700">
                    {b.items.map((item) => (
                      <li key={item}>
                        <WithBlanks text={item} />
                      </li>
                    ))}
                  </ul>
                )
              )}
            </section>
          ))}

          {policy.signature && (
            <section className="mt-9 break-inside-avoid border-t border-slate-200 pt-6">
              <h3 className="text-base font-bold text-ink">Agreement</h3>
              <p className="mt-2 text-[15px] text-slate-700">{policy.signature[0]}</p>
              <div className="mt-6 grid gap-7 text-sm text-slate-600 sm:grid-cols-2">
                {["Student name", "Parent or guardian (if under 18)", "Signature", "Date"].map((label) => (
                  <div key={label}>
                    <div className="h-6 border-b border-slate-400" />
                    <p className="mt-1.5">{label}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </div>
  );
}
