import Reveal from "./Reveal";
import WaitlistButton from "./WaitlistButton";

const CTA = () => (
  <section id="join" className="bg-white px-5 pb-24 sm:pb-28">
    <Reveal className="mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-dark to-brand px-8 py-16 text-center text-white sm:px-16 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <h2 className="relative text-3xl font-extrabold tracking-tight [text-wrap:balance] sm:text-5xl">
          Spend your time on the music.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-indigo-100/85">
          MusiOS opens to new teachers soon. Join the waitlist and you&apos;ll be the first to know.
        </p>
        <WaitlistButton size="lg" variant="light" className="relative mt-8" />
        <p className="relative mt-4 text-sm text-indigo-100/70">Free trial with up to 4 students and 1 class. No time limit.</p>
      </div>
    </Reveal>
  </section>
);

export default CTA;
