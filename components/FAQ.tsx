"use client";

import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

// Answers describe the app as it is today. Also used on /support.
const faqs = [
  {
    question: "What is MusiOS?",
    answer:
      "MusiOS is an app for music teachers that brings scheduling, practice tracking, messaging and payments into one place, on your phone and on the web. Your students get their own app to see what to practise, open the files you share and pay you.",
  },
  {
    question: "When can I start using it?",
    answer:
      "MusiOS is in a closed beta right now. Join the waitlist and we'll email you as soon as it opens to new teachers.",
  },
  {
    question: "How much does it cost?",
    answer:
      "You can try MusiOS for free with up to 4 students and 1 class, with no time limit and no card needed. When you're ready for more, a single Standard plan includes everything. We'll announce its price at launch.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes. MusiOS works on iPhone, Android and in any web browser, for teachers and students alike. The iPhone and Android apps arrive in the App Store and Google Play at launch.",
  },
  {
    question: "How do students pay me?",
    answer:
      "You connect your own Stripe account once. After that you send a payment request, your student pays by card from the app or an emailed link, and Stripe pays out to your bank. You can also mark a payment as paid when someone pays in cash or by bank transfer.",
  },
  {
    question: "Can I text my students?",
    answer:
      "Yes. Messages go out in the app and by email, and in the phone app you can also text students from your own number. MusiOS opens your Messages app for one student after another with the text ready, so nobody sees anyone else's number.",
  },
  {
    question: "Is my students' data safe?",
    answer:
      "MusiOS is built by a Europe-based company with GDPR as the baseline. You stay in control of the student information you enter, as described in our Privacy Policy.",
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
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <MotionConfig reducedMotion="user">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          const panelId = `faq-panel-${i}`;
          return (
            <div key={faq.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-lg font-semibold text-ink">{faq.question}</span>
                  <FaChevronDown
                    aria-hidden
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 leading-relaxed text-slate-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </MotionConfig>
  );
};

export default FAQ;
