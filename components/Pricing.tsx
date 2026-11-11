import { MdCheck } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import WaitlistButton from "./WaitlistButton";

// Prices stay "Coming soon" until launch. Keep these lists in line with what
// the app's plans actually enforce (backend tiers table).
const PLANS = [
  {
    name: "Free trial",
    price: "Free",
    note: "No time limit, no card needed",
    points: ["Up to 4 students", "1 class", "Scheduling, practice and files", "Student logins included"],
    style: "light",
  },
  {
    name: "Standard",
    price: "Coming soon",
    note: "One plan with everything",
    badge: "Everything included",
    points: [
      "Students and classes",
      "Scheduling with calendar sync",
      "Practice tracking and a file library",
      "Card payments with reminders",
      "App and email messages, plus texting from your phone",
      "For you and your students, on iPhone, Android and web",
    ],
    style: "featured",
  },
  {
    name: "School",
    price: "After launch",
    note: "For schools with several teachers",
    points: ["Multiple teachers in one school", "Central billing and admin", "A school-wide overview"],
    style: "planned",
  },
] as const;

const Pricing = () => (
  <section id="pricing" className="bg-white py-24 sm:py-28">
    <div className="mx-auto max-w-6xl px-5">
      <Reveal>
        <SectionHeading eyebrow="Pricing" title="Try it free. Upgrade when you're ready.">
          Start with up to 4 students and a class, for as long as you like. When your studio moves in, one plan covers
          everything.
        </SectionHeading>
      </Reveal>

      <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
        {PLANS.map((plan, i) => {
          const featured = plan.style === "featured";
          const planned = plan.style === "planned";
          return (
            <Reveal key={plan.name} delay={i * 0.06} className="h-full">
              <div
                className={twMerge(
                  "flex h-full flex-col rounded-3xl border p-8",
                  featured && "border-ink bg-ink text-white shadow-2xl lg:-my-4 lg:py-12",
                  plan.style === "light" && "border-slate-200 bg-white shadow-sm",
                  planned && "border-dashed border-slate-300 bg-slate-50 text-slate-500"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className={twMerge("text-lg font-bold", featured ? "text-white" : planned ? "text-slate-500" : "text-ink")}>{plan.name}</h3>
                  {"badge" in plan && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-indigo-100">{plan.badge}</span>
                  )}
                </div>
                <p className={twMerge("mt-6 text-4xl font-extrabold tracking-tight", featured ? "text-white" : planned ? "text-slate-400" : "text-ink")}>
                  {plan.price}
                </p>
                <p className={twMerge("mt-1 text-sm", featured ? "text-indigo-100/80" : "text-slate-500")}>{plan.note}</p>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <MdCheck className={twMerge("mt-0.5 h-5 w-5 shrink-0", featured ? "text-indigo-200" : planned ? "text-slate-400" : "text-brand")} aria-hidden />
                      <span className={featured ? "text-indigo-50" : planned ? "" : "text-slate-700"}>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {planned ? (
                    <button type="button" disabled className="w-full cursor-not-allowed rounded-xl border border-slate-300 py-2.5 font-semibold text-slate-400">
                      Planned after launch
                    </button>
                  ) : (
                    <WaitlistButton className="w-full" variant={featured ? "light" : "primary"} />
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Pricing;
