"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BETA_START } from "@/lib/beta";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState("");
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
        source: "landing-page",
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to submit");
    }

    setSubmitted(true);
    setEmail("");
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
              p-8
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
                <h2 className="text-3xl font-bold text-center bg-gradient-to-b from-black to-[#002499] bg-clip-text text-transparent">
                  Join the closed beta
                </h2>

                {/* Copy */}
                <p className="mt-4 text-center text-gray-700 text-lg">
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