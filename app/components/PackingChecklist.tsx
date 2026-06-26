"use client";

import { useState } from "react";
import type { PackingItem } from "@/app/types";

interface PackingChecklistProps {
  items: PackingItem[];
}

export default function PackingChecklist({ items }: PackingChecklistProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalItems = items.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-mist-600">
          {checkedCount} of {totalItems} packed
        </p>
        <div className="h-2 w-32 overflow-hidden rounded-full bg-forest-100">
          <div
            className="h-full rounded-full bg-forest-500 transition-all duration-300"
            style={{
              width: `${totalItems ? (checkedCount / totalItems) * 100 : 0}%`,
            }}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((category) => (
          <div
            key={category.category}
            className="rounded-2xl border border-forest-200 bg-white p-5 shadow-sm"
          >
            <h3 className="mb-4 font-display text-lg font-semibold text-forest-800">
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.items.map((item, idx) => {
                const key = `${category.category}-${idx}`;
                return (
                  <li key={key}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg p-2 transition-colors hover:bg-forest-50 active:bg-forest-100">
                      <input
                        type="checkbox"
                        checked={!!checked[key]}
                        onChange={() => toggle(key)}
                        className="mt-0.5 h-5 w-5 shrink-0 rounded border-forest-300 text-forest-600 focus:ring-forest-500"
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          checked[key]
                            ? "text-mist-400 line-through"
                            : "text-mist-700"
                        }`}
                      >
                        {item}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
