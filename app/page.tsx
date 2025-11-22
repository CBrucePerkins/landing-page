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

export default function Home() {
  return (
    <div>
      <Header />

      <section id="hero">
        <Hero />
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
        <Pricing />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <Footer />
    </div>
  );
}
