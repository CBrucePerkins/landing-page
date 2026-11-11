import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import WaitlistButton from "./WaitlistButton";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#students", label: "For students" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

// On phones the links drop away and the sign-up button stays, so there's
// always one obvious action. (The old hamburger icon had no menu behind it.)
const Header = () => (
  <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
      <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-ink">
        <Image src={Logo} alt="" className="h-8 w-8" priority />
        MusiOS
      </a>
      <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-brand">
            {l.label}
          </a>
        ))}
      </nav>
      <WaitlistButton size="sm">Join the waitlist</WaitlistButton>
    </div>
  </header>
);

export default Header;
