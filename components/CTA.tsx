"use client";

import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import Star from "@/public/assests/emojistar 1.png";
import Helix from "@/public/assests/helix2 1.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CTA = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center pt-16 pb-24 px-14 bg-gradient-to-t from-[#afbbe4] to-white overflow-x-clip"
    >
      <div className="max-w-[700px] flex flex-col items-center relative">
        <motion.img
          src={Star.src}
          alt="Decorative star"
          className="absolute -left-[345px] -top-28 pr-6 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
        <motion.img
          src={Helix.src}
          alt="Decorative helix"
          className="absolute -right-80 -top-6 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />

        {/* CTA Heading */}
        <div className="text-4xl md:text-5xl lg:text-6xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Transform your music studio today
        </div>

        {/* Subtext */}
        <div className="text-center text-lg mb-8 md:text-xl text-gray-700">
          Join the many teachers using <span className="font-semibold">MusiOS</span> to
          simplify scheduling, student practice tracking, and payments — all in one secure platform.
          Start free and focus more on teaching, not admin.
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mt-4 text-lg">
          <Button text="Get started for free" />
          <div className="font-semibold cursor-pointer hover:underline">
            Learn more
            <FaArrowRight className="h-3 w-3 inline ml-2" />
          </div>
        </div>

        {/* Small Trust Line */}
        <div className="mt-8 text-center text-sm text-gray-600">
          No credit card required · Unlimited free trial · Upgrade anytime
        </div>
      </div>
    </div>
  );
};

export default CTA;
