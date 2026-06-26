"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { tripMeta } from "@/app/data/itinerary";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden sm:min-h-screen"
    >
      <Image
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
        alt="Misty Western Ghats coffee hills"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-900/60 to-forest-950/90" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-forest-200 sm:text-base"
        >
          {tripMeta.duration} · Karnataka
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        >
          {tripMeta.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-forest-100 sm:text-xl md:text-2xl"
        >
          {tripMeta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <div className="flex min-h-[5.5rem] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-center backdrop-blur-sm">
            <span className="mb-1.5 block text-sm font-medium text-forest-200">
              Dates
            </span>
            <p className="font-semibold leading-snug text-white">
              {tripMeta.startDate} – {tripMeta.endDate}
            </p>
          </div>
          <div className="flex min-h-[5.5rem] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-center backdrop-blur-sm">
            <span className="mb-1.5 block text-sm font-medium text-forest-200">
              Best Season
            </span>
            <p className="font-semibold leading-snug text-white">
              {tripMeta.bestSeason}
            </p>
          </div>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="#itinerary"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#itinerary")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-10 inline-block rounded-full bg-earth-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-earth-900/30 transition-all hover:bg-earth-400 hover:shadow-xl active:scale-95"
        >
          Explore Itinerary ↓
        </motion.a>
      </div>
    </section>
  );
}
