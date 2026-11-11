import { FaArrowRight } from "react-icons/fa";
import { PhoneFrame } from "./Frames";
import Screen from "./Screen";
import WaitlistButton from "./WaitlistButton";

const Hero = () => (
  <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-soft via-white to-white">
    <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-300/30 blur-3xl" />

    <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 md:grid-cols-[1.1fr_1fr] md:pt-20 lg:pb-28">
      <div>
        <p className="inline-flex rounded-full border border-brand/15 bg-white px-3 py-1 text-sm font-medium text-brand shadow-sm">
          For music teachers · Closed beta
        </p>
        <h1 className="mt-5 text-5xl font-black tracking-tight text-ink [text-wrap:balance] sm:text-6xl lg:text-7xl">
          Teach music, not admin.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-600 [text-wrap:pretty] sm:text-xl">
          Schedule lessons, assign practice, get paid and message your students, all from one app on your phone.
          Your students get the app too.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <WaitlistButton size="lg" />
          <a href="#features" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-brand">
            See how it works <FaArrowRight className="h-3 w-3" aria-hidden />
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-500">Free trial with up to 4 students and 1 class. No time limit.</p>
      </div>

      {/* Teacher app in front, student app behind it: the two sides of one studio. */}
      {/* Sized so the pair fits side by side on a 360px phone without clipping,
          and the front phone never covers the back phone's label. */}
      <div className="relative mx-auto h-[440px] w-full max-w-[350px] sm:h-[580px] sm:max-w-[470px]">
        <div className="absolute right-0 top-0 rotate-[5deg]">
          <PhoneFrame className="w-[155px] sm:w-[225px]">
            <Screen name="hero-student" label="Student · This week's practice" alt="The MusiOS student app showing this week's practice" sizes="225px" priority />
          </PhoneFrame>
          <span className="mt-3 block text-center text-xs font-semibold uppercase tracking-wider text-slate-400">Student app</span>
        </div>
        <div className="absolute bottom-0 left-0 z-10">
          <PhoneFrame className="w-[180px] sm:w-[255px]">
            <Screen name="hero-teacher" label="Teacher · Home, today's lessons" alt="The MusiOS teacher app showing today's lessons and students" sizes="255px" priority />
          </PhoneFrame>
          <span className="mt-3 block text-center text-xs font-semibold uppercase tracking-wider text-slate-400">Teacher app</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
