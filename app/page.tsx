"use client";

import { useState } from "react";

import BrandSlide from "@/components/BrandSlide";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ProductCard from "@/components/ProductCard";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import ProblemSection from "@/components/ProblemSection";
import WaitlistModal from "@/components/WaitListModal";

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const openWaitlist = () => setWaitlistOpen(true);
  const closeWaitlist = () => setWaitlistOpen(false);

  return (
    <div>
      {/* Global waitlist modal */}
      <WaitlistModal isOpen={waitlistOpen} onClose={closeWaitlist} />

      <Header onOpenWaitlist={openWaitlist} />

      <section id="hero">
        <Hero onOpenWaitlist={openWaitlist} />
      </section>

      <section id="problem">
        <ProblemSection />
      </section>

      <section id="product-showcase">
        <ProductShowcase />
      </section>

      <section id="product-card">
        <ProductCard />
      </section>

      <section id="pricing">
        <Pricing onOpenWaitlist={openWaitlist}/>
      </section>

      <section id="cta">
        <CTA onOpenWaitlist={openWaitlist} />
      </section>

      <Footer />
    </div>
  );
}
