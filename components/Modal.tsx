"use client";

import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modal = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const Modal = ({ isOpen, onClose, feature }) => {
  if (!feature) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-50"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          {/* Modal Content */}
          <motion.div
            variants={modal}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/80 backdrop-blur-xl shadow-2xl border border-white/30 rounded-2xl w-[90%] max-w-xl p-8 relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-700 hover:text-black text-xl font-bold"
            >
              ×
            </button>

            {/* Header */}
            <div className="text-3xl font-bold bg-gradient-to-b from-black to-[#002499] bg-clip-text text-transparent">
              {feature.title}
            </div>

            {/* Description */}
            <div className="mt-4 text-lg text-gray-700">
              {feature.description}
            </div>

            {/* Image */}
            {feature.image && (
              <img
                src={feature.image}
                alt={feature.title}
                className="mt-6 w-full rounded-xl shadow-lg"
              />
            )}

            {/* Additional content */}
            {feature.details && (
              <div className="mt-6 text-gray-800 text-md leading-relaxed">
                {feature.details}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
