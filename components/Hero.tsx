"use client";

import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import HeroImage from "@/public/assets/treble-clef.png";
import Eighthnote from "@/public/assets/eigth.png";
import Violin from "@/public/assets/violin.png";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  onOpenWaitlist: () => void;
}

const Hero = ({ onOpenWaitlist }: HeroProps) => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const translateX = useTransform(scrollYProgress, [0, 1], [1500, -2000]);

  return (
    <section
      ref={heroRef}
      className="p-8 pb-20 md:p-10 lg:p-20 font-medium bg-gradient-to-tr from-[#001E80] via-[#e4eaff] overflow-hidden"
    >
      <div className="md:flex items-center justify-between gap-12 lg:gap-20 max-w-7xl mx-auto">
        {/* Text */}
        <div className="md:w-[500px]">
          <div className="border-2 w-fit px-2 py-0.5 rounded-lg border-slate-400/80 text-sm lg:text-base">
            Built for music teachers
          </div>

          <h1 className="text-5xl md:text-7xl font-black my-7 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
            Teach music, not admin.
          </h1>

          <p className="text-lg lg:text-xl opacity-85">
            MusiOS helps you manage students, lessons, practice sheets, and payments —
            all in one place.
          </p>

          <div className="flex items-center gap-4 mt-8 text-lg">
            {/* ✅ ONLY triggers open */}
            <Button
              text="Sign Up For Waiting List"
              onClick={onOpenWaitlist}
            />

            <div className="cursor-pointer hover:underline flex items-center gap-2">
              Learn How It Works
              <FaArrowRight className="h-3 w-3 inline" />
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="relative md:h-[600px] md:w-[600px] flex justify-center items-center mt-12 md:mt-0">
          <motion.img
            src={Eighthnote.src}
            alt=""
            className="absolute w-20 top-6 right-24"
            style={{ translateX }}
          />

          <motion.img
            src={HeroImage.src}
            alt=""
            className="h-[420px] relative z-10"
            animate={{ translateY: [-20, 20] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 3 }}
          />

          <motion.img
            src={Violin.src}
            alt=""
            className="absolute w-64 right-[-70px] bottom-0 opacity-70"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
