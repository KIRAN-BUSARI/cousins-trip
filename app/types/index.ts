export type LocationCategory = "chikmagaluru" | "sakleshpura";

export interface Activity {
  time: string;
  title: string;
  description: string;
  duration?: string;
  tips?: string;
}

export interface TimeSlot {
  period: "Morning" | "Afternoon" | "Evening";
  activities: Activity[];
}

export interface Day {
  dayNumber: number;
  date: string;
  title: string;
  subtitle: string;
  location: string;
  slots: TimeSlot[];
  meals: string[];
  travelNote?: string;
}

export interface Place {
  id: string;
  name: string;
  location: LocationCategory;
  category: string;
  description: string;
  bestTime: string;
  duration: string;
  image: string;
  icon: string;
  tips?: string;
}

export interface FoodSpot {
  name: string;
  location: LocationCategory | "both";
  specialty: string;
  note: string;
}

export interface StayOption {
  name: string;
  location: LocationCategory;
  type: "homestay" | "resort" | "hotel";
  priceRange: string;
  highlights: string[];
  contact?: string;
}

export interface PackingItem {
  category: string;
  items: string[];
}

export interface Tip {
  title: string;
  content: string;
  icon: string;
}

export interface TripMeta {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  duration: string;
  distance: string;
  bestSeason: string;
}

export interface NavLink {
  label: string;
  href: string;
}
