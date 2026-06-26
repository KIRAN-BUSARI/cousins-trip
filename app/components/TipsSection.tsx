"use client";

import { motion } from "framer-motion";
import type { Tip } from "@/app/types";

interface TipsSectionProps {
  tips: Tip[];
}

export default function TipsSection({ tips }: TipsSectionProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tips.map((tip, index) => (
        <motion.div
          key={tip.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="rounded-2xl border border-forest-200 bg-white p-5 shadow-sm"
        >
          <span className="text-2xl">{tip.icon}</span>
          <h3 className="mt-3 font-display text-lg font-semibold text-forest-900">
            {tip.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mist-600">
            {tip.content}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
