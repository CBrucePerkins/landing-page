import { FaApple, FaAndroid, FaDesktop } from "react-icons/fa";
import { BrowserFrame } from "./Frames";
import Reveal from "./Reveal";
import Screen from "./Screen";
import SectionHeading from "./SectionHeading";

const PLATFORMS = [
  { icon: FaApple, label: "iPhone" },
  { icon: FaAndroid, label: "Android" },
  { icon: FaDesktop, label: "Any web browser" },
];

const Devices = () => (
  <section id="devices" className="bg-gradient-to-b from-white to-brand-soft py-24 sm:py-28">
    <div className="mx-auto max-w-6xl px-5">
      <Reveal>
        <SectionHeading eyebrow="Everywhere you work" title="On your phone and your computer">
          Plan the week at your desk, then teach from your phone. It&apos;s the same studio everywhere, always up to date.
        </SectionHeading>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {PLATFORMS.map((p) => (
            <li key={p.label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              <p.icon className="h-4 w-4 text-brand" aria-hidden />
              {p.label}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mx-auto mt-14 max-w-5xl">
        <BrowserFrame>
          <Screen name="desktop-home" label="Web · Teacher Home" alt="The MusiOS web app on a computer" sizes="(min-width: 1024px) 1024px, 100vw" />
        </BrowserFrame>
      </Reveal>
    </div>
  </section>
);

export default Devices;
