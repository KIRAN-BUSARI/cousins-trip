"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import ItineraryDay from "@/app/components/ItineraryDay";
import PlaceCard from "@/app/components/PlaceCard";
import PackingChecklist from "@/app/components/PackingChecklist";
import TipsSection from "@/app/components/TipsSection";
import Footer from "@/app/components/Footer";
import {
  itineraryDays,
  places,
  foodSpots,
  stayOptions,
  packingList,
  tips,
  tripMeta,
} from "@/app/data/itinerary";

function SectionWrapper({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`section-padding ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [placeFilter, setPlaceFilter] = useState<
    "all" | "chikmagaluru" | "sakleshpura"
  >("all");

  const filteredPlaces =
    placeFilter === "all"
      ? places
      : places.filter((p) => p.location === placeFilter);

  const chikmagaluruStays = stayOptions.filter(
    (s) => s.location === "chikmagaluru"
  );
  const sakleshpuraStays = stayOptions.filter(
    (s) => s.location === "sakleshpura"
  );

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Itinerary */}
        <SectionWrapper id="itinerary" className="bg-white">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="section-heading">Day-wise Itinerary</h2>
                <p className="section-subheading">
                  Three days across coffee country and misty ghats — with
                  realistic travel times and meal stops.
                </p>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                className="no-print shrink-0 rounded-lg border border-forest-300 px-4 py-2 text-sm font-medium text-forest-700 transition-colors hover:bg-forest-50 active:bg-forest-100"
              >
                🖨️ Print Itinerary
              </button>
            </div>

            <p className="print-only mt-4 text-sm text-gray-600">
              {tripMeta.title} · {tripMeta.startDate} – {tripMeta.endDate}
            </p>

            <div className="mt-10 space-y-4">
              {itineraryDays.map((day) => (
                <ItineraryDay
                  key={day.dayNumber}
                  day={day}
                  defaultOpen={day.dayNumber === 1}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Places */}
        <SectionWrapper id="places" className="bg-forest-50">
          <div className="mx-auto max-w-6xl">
            <h2 className="section-heading">Places to Visit</h2>
            <p className="section-subheading">
              All key spots across Chikmagaluru and Sakleshpura with best
              visiting times.
            </p>

            <div className="no-print mt-8 flex flex-wrap gap-2">
              {(
                [
                  ["all", "All Places"],
                  ["chikmagaluru", "Chikmagaluru"],
                  ["sakleshpura", "Sakleshpura"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPlaceFilter(value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all active:scale-95 ${
                    placeFilter === value
                      ? "bg-forest-600 text-white shadow-md"
                      : "bg-white text-forest-700 hover:bg-forest-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPlaces.map((place, index) => (
                <PlaceCard key={place.id} place={place} index={index} />
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Food & Coffee */}
        <SectionWrapper id="food" className="bg-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="section-heading">Food & Coffee</h2>
            <p className="section-subheading">
              Malnad flavours and estate coffee you shouldn&apos;t miss.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {foodSpots.map((spot, index) => (
                <motion.div
                  key={spot.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-earth-200 bg-earth-50/50 p-5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-forest-900">
                      {spot.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-earth-200 px-2 py-0.5 text-xs font-medium text-earth-800">
                      {spot.location === "both"
                        ? "Both"
                        : spot.location === "chikmagaluru"
                          ? "Chik"
                          : "Sakle"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-earth-700">
                    ☕ {spot.specialty}
                  </p>
                  <p className="mt-2 text-sm text-mist-600">{spot.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Stays */}
        <SectionWrapper id="stays" className="bg-forest-50">
          <div className="mx-auto max-w-6xl">
            <h2 className="section-heading">Where to Stay</h2>
            <p className="section-subheading">
              Homestays and resorts for every budget — book plantation stays
              early for July monsoon season.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 font-display text-xl font-semibold text-forest-800">
                  🏡 Chikmagaluru (Night 1)
                </h3>
                <div className="space-y-4">
                  {chikmagaluruStays.map((stay) => (
                    <StayCard key={stay.name} stay={stay} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 font-display text-xl font-semibold text-forest-800">
                  🌿 Sakleshpura (Night 2)
                </h3>
                <div className="space-y-4">
                  {sakleshpuraStays.map((stay) => (
                    <StayCard key={stay.name} stay={stay} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Packing */}
        <SectionWrapper id="packing" className="bg-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="section-heading">Packing Checklist</h2>
            <p className="section-subheading">
              Tap items as you pack — progress saves for this session only.
            </p>
            <div className="mt-10">
              <PackingChecklist items={packingList} />
            </div>
          </div>
        </SectionWrapper>

        {/* Tips */}
        <SectionWrapper id="tips" className="bg-forest-50">
          <div className="mx-auto max-w-6xl">
            <h2 className="section-heading">Tips & Essentials</h2>
            <p className="section-subheading">
              Permits, weather, driving advice, and responsible travel notes.
            </p>
            <div className="mt-10">
              <TipsSection tips={tips} />
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

function StayCard({
  stay,
}: {
  stay: (typeof stayOptions)[number];
}) {
  const typeEmoji =
    stay.type === "homestay" ? "🏠" : stay.type === "resort" ? "🏨" : "🛏️";

  return (
    <div className="rounded-2xl border border-forest-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-sm">{typeEmoji}</span>
          <h4 className="mt-1 font-display text-lg font-semibold text-forest-900">
            {stay.name}
          </h4>
          <p className="text-sm capitalize text-mist-500">{stay.type}</p>
        </div>
        <span className="shrink-0 rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700">
          {stay.priceRange}
        </span>
      </div>
      <ul className="mt-3 space-y-1">
        {stay.highlights.map((h) => (
          <li key={h} className="text-sm text-mist-600">
            ✓ {h}
          </li>
        ))}
      </ul>
      {stay.contact && (
        <p className="mt-3 text-xs text-earth-600">🔗 {stay.contact}</p>
      )}
    </div>
  );
}
