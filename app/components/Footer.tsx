import { tripMeta } from "@/app/data/itinerary";

export default function Footer() {
  return (
    <footer className="border-t border-forest-800 bg-forest-950 text-forest-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-display text-xl font-semibold text-white">
              {tripMeta.title}
            </h2>
            <p className="mt-1 text-sm text-forest-300">
              {tripMeta.startDate} – {tripMeta.endDate}
            </p>
          </div>
          <div className="text-sm text-forest-400">
            <p>Western Ghats · Karnataka, India</p>
            <p className="mt-1">{tripMeta.distance}</p>
          </div>
        </div>
        <div className="mt-8 border-t border-forest-800 pt-8 text-center text-xs text-forest-500">
          <p>
            Travel responsibly. Check weather & road conditions before you go.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Chikmagaluru & Sakleshpura Trip Planner
          </p>
        </div>
      </div>
    </footer>
  );
}
