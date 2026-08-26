import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png";
import Footer from "./Footer";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

// Shared chrome for standalone legal pages (Privacy, Terms) — deliberately
// separate from the marketing Header, since that one is built around
// same-page anchor links (#hero, #pricing, ...) that don't exist here.
const LegalLayout = ({ title, lastUpdated, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
        <Link href="/">
          <Image src={Logo} alt="MusiOS" className="cursor-pointer" />
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-[#001E80] hover:underline"
        >
          ← Back to home
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          {title}
        </h1>
        <p className="text-sm text-slate-500 mb-10">
          Last updated: {lastUpdated}
        </p>

        <div className="legal-content text-slate-700 leading-relaxed">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalLayout;
