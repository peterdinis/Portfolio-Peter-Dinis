"use client";

import { motion } from "framer-motion";

export default function UnderConstruction() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center p-6 bg-white rounded-2xl shadow-xl border border-yellow-300"
      >
        <div className="text-6xl mb-4">🚧👷‍♂️🏗️</div>
        <h1 className="text-3xl font-bold text-yellow-600 mb-2">
          Under Construction
        </h1>
        <p className="text-gray-700 text-lg">
          We’re working hard to build something awesome. Check back soon!
        </p>
      </motion.div>
    </div>
  );
}