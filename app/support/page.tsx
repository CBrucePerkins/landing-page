import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Support — MusiOS",
  description: "Get help with MusiOS — browse the FAQ or contact support directly.",
  alternates: {
    canonical: "/support",
  },
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Deliberately not the marketing Header — that one's built around
          same-page anchor links (#hero, #pricing, ...) that don't exist
          here, same reasoning as LegalLayout for Privacy/Terms. */}
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

      <main className="max-w-3xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          MusiOS Support
        </h1>
        <p className="text-lg text-slate-700">
          Browse the FAQ below, or reach out directly and we&rsquo;ll get
          back to you as soon as we can.
        </p>
        <a
          href="mailto:support@musios.io"
          className="mt-6 inline-block rounded-lg bg-[#002499] px-6 py-3 text-white font-medium hover:opacity-90 transition"
        >
          Email support@musios.io
        </a>
      </main>

      <FAQ />

      <Footer />
    </div>
  );
}
