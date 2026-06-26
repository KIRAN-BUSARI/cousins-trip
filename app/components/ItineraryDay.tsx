"use client";

import { useState } from "react";
import type { Day } from "@/app/types";

interface ItineraryDayProps {
  day: Day;
  defaultOpen?: boolean;
}

export default function ItineraryDay({ day, defaultOpen = false }: ItineraryDayProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article className="itinerary-day overflow-hidden rounded-2xl border border-forest-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-start gap-4 p-5 text-left transition-colors active:bg-forest-50 sm:p-6"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-600 font-display text-lg font-bold text-white sm:h-14 sm:w-14 sm:text-xl">
          {day.dayNumber}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-earth-500 sm:text-sm">
            {day.date}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold text-forest-900 sm:text-xl">
            {day.title}
          </h3>
          <p className="mt-1 text-sm text-mist-600">{day.subtitle}</p>
          <span className="mt-2 inline-block rounded-full bg-forest-100 px-3 py-0.5 text-xs font-medium text-forest-700">
            📍 {day.location}
          </span>
        </div>
        <svg
          className={`mt-2 h-5 w-5 shrink-0 text-forest-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-forest-100 px-5 pb-6 pt-2 sm:px-6">
            {day.travelNote && (
              <div className="mb-4 rounded-xl bg-earth-50 p-4 text-sm text-earth-800">
                <strong>🚗 Travel note:</strong> {day.travelNote}
              </div>
            )}

            {day.slots.map((slot) => (
              <div key={slot.period} className="mb-6 last:mb-0">
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-forest-800">
                  <span className="text-lg">
                    {slot.period === "Morning"
                      ? "🌅"
                      : slot.period === "Afternoon"
                        ? "☀️"
                        : "🌙"}
                  </span>
                  {slot.period}
                </h4>
                <div className="space-y-4 border-l-2 border-forest-200 pl-4 sm:pl-6">
                  {slot.activities.map((activity, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[calc(1rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-forest-400 sm:-left-[calc(1.5rem+5px)]" />
                      <p className="text-xs font-semibold text-earth-600">
                        {activity.time}
                        {activity.duration && (
                          <span className="ml-2 font-normal text-mist-500">
                            · {activity.duration}
                          </span>
                        )}
                      </p>
                      <h5 className="mt-0.5 font-medium text-forest-900">
                        {activity.title}
                      </h5>
                      <p className="mt-1 text-sm leading-relaxed text-mist-600">
                        {activity.description}
                      </p>
                      {activity.tips && (
                        <p className="mt-2 rounded-lg bg-forest-50 px-3 py-2 text-xs text-forest-700">
                          💡 {activity.tips}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-4 rounded-xl bg-mist-50 p-4">
              <h4 className="mb-2 text-sm font-semibold text-forest-800">
                🍽️ Meals
              </h4>
              <ul className="space-y-1">
                {day.meals.map((meal, idx) => (
                  <li key={idx} className="text-sm text-mist-700">
                    {meal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
