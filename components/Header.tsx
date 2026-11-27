import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import WaitlistButton from "./WaitlistButton";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#students", label: "For students" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

// Pages of their own, linked the same way from every page.
// `short` is shown on tablet widths, where the full label would crowd the bar.
const PAGES = [{ href: "/studio-policy-template", label: "Free policy template", short: "Policy template" }];

// On phones the links drop away and the sign-up button stays, so there's
// always one obvious action. (The old hamburger icon had no menu behind it.)
// On other pages (`onHome={false}`) the links point back to the home page's
// sections instead of anchors on the current page.
const Header = ({ onHome = true, current }: { onHome?: boolean; current?: string }) => (
  <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-md print:hidden">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
      <a href={onHome ? "#top" : "/"} className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-ink">
        <Image src={Logo} alt="" className="h-9 w-9" priority />
        MusiOS
      </a>
      <nav aria-label="Main" className="hidden items-center gap-5 whitespace-nowrap text-sm font-medium text-slate-600 md:flex lg:gap-7">
        {LINKS.map((l) => (
          <a key={l.href} href={onHome ? l.href : `/${l.href}`} className="transition-colors hover:text-brand">
            {l.label}
          </a>
        ))}
        {PAGES.map((l) => (
          <a
            key={l.href}
            href={l.href}
            aria-current={current === l.href ? "page" : undefined}
            className="transition-colors hover:text-brand aria-[current=page]:font-semibold aria-[current=page]:text-brand"
          >
            <span className="lg:hidden">{l.short}</span>
            <span className="hidden lg:inline">{l.label}</span>
          </a>
        ))}
      </nav>
      <WaitlistButton size="sm" className="whitespace-nowrap" />
    </div>
  </header>
);

export default Header;
