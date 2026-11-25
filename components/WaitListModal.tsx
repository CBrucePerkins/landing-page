"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BETA_START } from "@/lib/beta";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// Ranges rather than an exact number: quick to answer, and enough to see who
// has the 10 or more students the beta is looking for.
const STUDENT_RANGES = ["Fewer than 5", "5 to 9", "10 to 19", "20 to 39", "40 or more"];

export default function WaitlistModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [students, setStudents] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const GOOGLE_SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwn3eD0aBLxg2T1OJK4MC5ejZnsYTEwTdcaA7_tJUOcbSLuEWaeJNa1rBM55jAUTzs2/exec";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        email,
        students,
        source: "landing-page",
      }),
    });

    // The sheet's script answers 200 even when it refuses a sign-up, with
    // the reason in the body.
    const result = await res.json().catch(() => null);
    if (!res.ok || result?.status === "error") {
      throw new Error(result?.message || "Failed to submit");
    }

    setSubmitted(true);
    setEmail("");
    setStudents("");
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              w-[90%] max-w-lg
              rounded-2xl
              bg-white/80 backdrop-blur-xl
              border border-white/30
              shadow-2xl
              max-h-[calc(100dvh-2rem)] overflow-y-auto
              p-6 sm:p-8
              relative
            "
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              ×
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-b from-black to-[#002499] bg-clip-text text-transparent">
                  Join the closed beta
                </h2>

                {/* Copy */}
                <p className="mt-3 sm:mt-4 text-center text-gray-700 sm:text-lg">
                  Testing begins in <strong>{BETA_START}</strong>. Be one of the
                  first music teachers to manage students, lessons, practice
                  and payments with MusiOS.
                </p>

                <p className="mt-3 text-center text-gray-700">
                  Sign up and we’ll email you with the next steps before it starts.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    aria-label="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      w-full
                      rounded-lg
                      border border-gray-300
                      px-4 py-3
                      text-lg
                      focus:outline-none focus:ring-2 focus:ring-[#002499]
                    "
                  />

                  <div>
                    <label htmlFor="beta-students" className="block mb-1.5 font-medium text-gray-700">
                      How many students do you teach?
                    </label>
                    <select
                      id="beta-students"
                      required
                      value={students}
                      onChange={(e) => setStudents(e.target.value)}
                      className={`
                        w-full
                        rounded-lg
                        border border-gray-300
                        bg-white
                        px-4 py-3
                        text-lg
                        focus:outline-none focus:ring-2 focus:ring-[#002499]
                        ${students ? "text-black" : "text-gray-500"}
                      `}
                    >
                      <option value="" disabled>Choose one</option>
                      {STUDENT_RANGES.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full
                      rounded-lg
                      bg-[#002499]
                      text-white
                      py-3
                      text-lg
                      font-medium
                      hover:opacity-90
                      transition
                      disabled:opacity-50
                    "
                  >
                    {loading ? "Signing up…" : "Sign up for the closed beta"}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    By signing up, you agree to our{" "}
                    <Link href="/privacy" className="underline hover:text-gray-700">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </>
            ) : (
              /* Success */
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold mb-3">
                  You’re signed up 🎉
                </h3>
                <p className="text-gray-700 text-lg">
                  Closed beta testing begins in {BETA_START}. We’ll email you with the next steps before it starts.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}