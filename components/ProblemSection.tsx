"use client";

import { motion } from "framer-motion";
import { MdSchedule, MdAttachMoney, MdMusicNote, MdOutlinePeopleAlt } from "react-icons/md";

const ProblemSection = () => {
  const problems = [
    {
      icon: <MdSchedule className="text-4xl text-[#001E80]" />,
      title: "Too much time on admin",
      desc: "Between scheduling, invoices, and tracking lessons, music teachers spend hours each week managing tasks instead of teaching.",
    },
    {
      icon: <MdMusicNote className="text-4xl text-[#001E80]" />,
      title: "Messy practice tracking",
      desc: "Students forget what to practice, and teachers lose visibility into progress — making lessons less effective.",
    },
    {
      icon: <MdAttachMoney className="text-4xl text-[#001E80]" />,
      title: "Payment headaches",
      desc: "Chasing down payments or managing multiple payment apps is frustrating and inefficient.",
    },
    {
      icon: <MdOutlinePeopleAlt className="text-4xl text-[#001E80]" />,
      title: "Hard to stay organized",
      desc: "As your student base grows, spreadsheets and sticky notes just can’t keep up with your studio’s needs.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#e4eaff] to-[#f8faff] py-28 px-8 md:px-16 lg:px-24 text-center overflow-hidden">
      {/* Heading */}
      <motion.div
        className="max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="border-2 w-fit mx-auto px-3 py-0.5 rounded-lg border-slate-300/80 text-sm md:text-base mb-4">
          The Problem
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-6">
          Teaching music shouldn’t feel like running an office.
        </h2>

        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
          Music educators love teaching — not spreadsheets, payment reminders, or lesson tracking.  
          Here’s what’s holding teachers back today.
        </p>
      </motion.div>

      {/* Problems Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {problems.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-slate-700 text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
