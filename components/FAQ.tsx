"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

// Questions are picked around real search intent for this category
// ("music studio management software," "app for music teachers," "practice
// tracking," "Stripe payments for lessons," "unlimited students," "GDPR")
// as well as the product decisions made on this page (unlimited
// students/storage on paid plans, regional SMS allowances, EU hosting).
const faqs = [
  {
    question: "What is MusiOS?",
    answer:
      "MusiOS is an all-in-one studio management platform for music teachers, combining student and class scheduling, practice tracking, messaging, and payments into one app — with native mobile apps for iOS and Android so you can run your studio from your phone.",
  },
  {
    question: "How much does MusiOS cost?",
    answer:
      "MusiOS offers a free plan to get started, plus paid Standard and Pro plans with unlimited students and unlimited storage as your studio grows. See the pricing section above for full details.",
  },
  {
    question: "Is there a limit on how many students I can add?",
    answer:
      "No. Our Free plan has a student cap to get you started, but both the Standard and Pro plans include unlimited students and unlimited file storage, so you never have to worry about outgrowing the software as your studio grows.",
  },
  {
    question: "Does MusiOS have a mobile app?",
    answer:
      "Yes — MusiOS includes native mobile apps for both iOS and Android, so you can check your schedule, message students, and track payments without needing to be at a computer.",
  },
  {
    question: "Can I track student practice in MusiOS?",
    answer:
      "Yes. Teachers can upload sheet music, assign practice items, and set weekly goals, while students log their own practice time so you can see progress at a glance.",
  },
  {
    question: "How do I collect payments from students?",
    answer:
      "MusiOS uses Stripe to process payments directly from your students, with auto-generated invoices, payment reminders, and a transaction dashboard — you get paid without chasing checks or cash.",
  },
  {
    question: "Can I send SMS or email reminders to students?",
    answer:
      "Yes. Every plan includes email messaging, and the Pro plan adds SMS reminders with a monthly allowance that varies depending on whether your students are in North America or Europe, reflecting the real cost difference in international SMS delivery.",
  },
  {
    question: "Is my students' data safe and GDPR-compliant?",
    answer:
      "Yes. MusiOS is built by a Europe-based company with GDPR as the baseline, application data is hosted within the EU, and teachers stay in control of the student data they enter, as described in our Privacy Policy.",
  },
  {
    question: "Do I need a credit card to try MusiOS?",
    answer:
      "No. You can start on the Free plan with no credit card required and an unlimited free trial before upgrading.",
  },
  {
    question: "Can multiple teachers or a whole music school use MusiOS?",
    answer:
      "A School Administrator plan for multi-teacher studios and schools — with centralized billing, multi-classroom support, and advanced analytics — is coming soon.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col items-center px-6 pb-28 pt-4">
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col items-center font-medium pb-14 mx-auto md:w-[600px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          FAQ
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Frequently asked questions
        </h2>

        <p className="text-center text-lg md:text-xl text-gray-700">
          Everything you need to know about running your studio on MusiOS.
        </p>
      </div>

      <div className="flex w-full max-w-3xl flex-col gap-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <FaChevronDown
                  className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 leading-relaxed text-slate-700">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
