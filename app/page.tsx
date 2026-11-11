import CTA from "@/components/CTA";
import Devices from "@/components/Devices";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StudentApp from "@/components/StudentApp";

// One promise, then each part of it once: what teachers get, what students
// get, where it runs, what it costs, and the questions people ask.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <StudentApp />
        <Devices />
        <Pricing />
        <section id="faq" className="bg-white px-5 pb-24 sm:pb-28">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Questions teachers ask" className="mb-12" />
          </Reveal>
          <FAQ />
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
