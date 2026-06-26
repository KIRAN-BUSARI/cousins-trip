"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Place } from "@/app/types";

interface PlaceCardProps {
  place: Place;
  index: number;
}

const locationLabels = {
  chikmagaluru: "Chikmagaluru",
  sakleshpura: "Sakleshpura",
};

export default function PlaceCard({ place, index }: PlaceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group overflow-hidden rounded-2xl border border-forest-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-44 overflow-hidden sm:h-48">
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-lg backdrop-blur-sm">
          {place.icon}
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-forest-700/90 px-2.5 py-0.5 text-xs font-medium text-white">
          {locationLabels[place.location]}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-earth-500">
          {place.category}
        </span>
        <h3 className="mt-1 font-display text-lg font-semibold text-forest-900">
          {place.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-mist-600">
          {place.description}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg bg-forest-50 px-3 py-2">
            <span className="font-medium text-forest-700">Best time</span>
            <p className="mt-0.5 text-mist-600">{place.bestTime}</p>
          </div>
          <div className="rounded-lg bg-earth-50 px-3 py-2">
            <span className="font-medium text-earth-700">Duration</span>
            <p className="mt-0.5 text-mist-600">{place.duration}</p>
          </div>
        </div>

        {place.tips && (
          <p className="mt-3 text-xs text-mist-500">💡 {place.tips}</p>
        )}
      </div>
    </motion.article>
  );
}
