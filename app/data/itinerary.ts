import type {
  Day,
  FoodSpot,
  NavLink,
  PackingItem,
  Place,
  StayOption,
  Tip,
  TripMeta,
} from "@/app/types";

export const tripMeta: TripMeta = {
  title: "Chikmagaluru & Sakleshpura",
  subtitle: "Coffee hills, misty peaks & Western Ghats adventure",
  startDate: "16 Jul 2026",
  endDate: "18 Jul 2026",
  duration: "3 Days / 2 Nights",
  distance: "Chikmagaluru ↔ Sakleshpura ~52 km (1 hr 15 min drive)",
  bestSeason: "July · Peak monsoon — lush hills & full waterfalls",
};

export const navLinks: NavLink[] = [
  { label: "Itinerary", href: "#itinerary" },
  { label: "Places", href: "#places" },
  { label: "Food & Coffee", href: "#food" },
  { label: "Stays", href: "#stays" },
  { label: "Packing", href: "#packing" },
  { label: "Tips", href: "#tips" },
];

export const itineraryDays: Day[] = [
  {
    dayNumber: 1,
    date: "Thursday, 16 Jul 2026",
    title: "Arrive in Chikmagaluru — Coffee Country",
    subtitle: "Plantation walks, lake sunset & local flavours",
    location: "Chikmagaluru",
    slots: [
      {
        period: "Morning",
        activities: [
          {
            time: "6:30 AM – 9:30 AM",
            title: "Travel to Chikmagaluru",
            description:
              "Depart Bangalore (~245 km, 4.5–5 hrs via NH 75) or Mangalore (~150 km, 3 hrs). Aim to reach by 9:30 AM for a full day.",
            duration: "4–5 hrs",
            tips: "Leave early to beat Bangalore traffic. Carry snacks; limited good stops after Hassan.",
          },
          {
            time: "9:30 AM – 10:30 AM",
            title: "Check-in & Breakfast",
            description:
              "Settle into your homestay/resort. Try local Akki Rotti with chutney and filter coffee at Town Canteen or a plantation café.",
            duration: "1 hr",
          },
          {
            time: "10:30 AM – 1:00 PM",
            title: "Coffee Plantation Tour & Tasting",
            description:
              "Guided walk through arabica/robusta estates near Mullahalli or Sringeri Road. Learn pulping, drying, and roasting; end with a cupping session.",
            duration: "2.5 hrs",
            tips: "Book plantation tours in advance (₹300–800/person). Wear closed shoes — paths can be muddy.",
          },
        ],
      },
      {
        period: "Afternoon",
        activities: [
          {
            time: "1:00 PM – 2:30 PM",
            title: "Lunch — Malnad Thali",
            description:
              "Head to Hotel Mayura or Machali for a traditional Malnad meal: rice, saaru, palya, kosambari, and fresh fish/chicken curry.",
            duration: "1.5 hrs",
          },
          {
            time: "2:30 PM – 5:30 PM",
            title: "Mullayanagiri Peak",
            description:
              "Drive to Mullayanagiri (~30 km, 45 min) — Karnataka's highest peak at 1,930 m. Short trek from parking to summit viewpoint.",
            duration: "3 hrs",
            tips: "Best before 3 PM before clouds roll in. Carry a light jacket; summit is windy. No entry fee; parking ₹20–30.",
          },
        ],
      },
      {
        period: "Evening",
        activities: [
          {
            time: "5:30 PM – 6:30 PM",
            title: "Baba Budangiri Dattatreya Peeta (drive-by)",
            description:
              "Scenic drive through ghats with views of shola grasslands. Quick stop at the shrine if time permits — full visit planned Day 2.",
            duration: "1 hr",
          },
          {
            time: "6:30 PM – 7:30 PM",
            title: "Hirekolale Lake Sunset",
            description:
              "Peaceful reservoir 5 km from town. Golden-hour reflections with Baba Budangiri hills in the backdrop — perfect unwind spot.",
            duration: "1 hr",
            tips: "Arrive by 6:45 PM for best light (Jul sunset ~7:00 PM). No boating; photography-friendly.",
          },
        ],
      },
    ],
    meals: [
      "Breakfast: Akki Rotti & filter coffee at homestay or Town Canteen",
      "Lunch: Malnad thali at Hotel Mayura, Chikmagaluru",
      "Dinner: Neer Dosa & chicken curry at Machali / Aroma Café terrace",
    ],
  },
  {
    dayNumber: 2,
    date: "Friday, 17 Jul 2026",
    title: "Peaks, Falls & Transfer to Sakleshpura",
    subtitle: "Sunrise at Z Point, Kemmangundi & scenic ghat drive",
    location: "Chikmagaluru → Sakleshpura",
    travelNote:
      "Chikmagaluru to Sakleshpura: ~52 km via Belur–Sakleshpura Road (SH 57), 1 hr 15 min–1 hr 30 min. Road is winding but well-paved.",
    slots: [
      {
        period: "Morning",
        activities: [
          {
            time: "5:00 AM – 5:45 AM",
            title: "Sunrise at Z Point, Kemmangundi",
            description:
              "Pre-dawn drive to Kemmangundi (~55 km, 1.5 hrs from Chikmagaluru). Trek 20 min to Z Point for panoramic sunrise over the Western Ghats.",
            duration: "45 min at viewpoint",
            tips: "Start by 5 AM from Kemmangundi guest house area. Torch essential. Weekday mornings are less crowded.",
          },
          {
            time: "6:00 AM – 8:30 AM",
            title: "Kalhatti Falls & Kemmangundi Gardens",
            description:
              "Visit Kalhatti Falls (12 km from Kemmangundi) — 122 m cascade with Shiva temple. Stroll through ornamental gardens and Raj Bhavan viewpoint.",
            duration: "2.5 hrs",
            tips: "Monkeys near falls — secure bags. Slipppery rocks; avoid monsoon peak flow.",
          },
          {
            time: "8:30 AM – 11:30 AM",
            title: "Hebbe Falls (Jeep Safari)",
            description:
              "Jeep from Kemmangundi base to Hebbe Falls (~8 km off-road + 1 km trek). Two-tier falls amid dense forest — one of the region's best.",
            duration: "3 hrs",
            tips: "Jeep costs ₹800–1,200 (shared). Permit at Kemmangundi checkpoint. Best 8–11 AM for soft light.",
          },
        ],
      },
      {
        period: "Afternoon",
        activities: [
          {
            time: "12:00 PM – 1:00 PM",
            title: "Lunch & Checkout",
            description:
              "Quick lunch in Chikmagaluru town, checkout from stay, and fuel up for the ghat drive.",
            duration: "1 hr",
          },
          {
            time: "1:30 PM – 3:00 PM",
            title: "Drive to Sakleshpura",
            description:
              "Scenic transfer via SH 57 through coffee and pepper plantations. Optional brief stop at Belur Chennakeshava Temple (+45 min if interested).",
            duration: "1 hr 15 min (direct)",
            tips: "Fill fuel in Chikmagaluru — fewer pumps on ghat stretch. Motion-sickness tablets if needed.",
          },
          {
            time: "3:00 PM – 4:00 PM",
            title: "Check-in at Sakleshpura",
            description:
              "Settle into homestay/resort amid plantation estate. Freshen up and enjoy estate-filter coffee on the verandah.",
            duration: "1 hr",
          },
        ],
      },
      {
        period: "Evening",
        activities: [
          {
            time: "4:30 PM – 6:30 PM",
            title: "Manjarabad Fort",
            description:
              "Star-shaped hill fort built by Tipu Sultan (~5 km from Sakleshpura). Climb to ramparts for 360° views of ghats and valleys.",
            duration: "2 hrs",
            tips: "Best at sunset (~7:00 PM). ~450 steps — moderate climb. Free entry; carry water.",
          },
        ],
      },
    ],
    meals: [
      "Breakfast: Packed breakfast or early dosa at Kemmangundi canteen",
      "Lunch: Quick thali in Chikmagaluru before departure",
      "Dinner: Estate-style dinner at homestay — akki roti, bamboo shoot curry, pepper chicken",
    ],
  },
  {
    dayNumber: 3,
    date: "Saturday, 18 Jul 2026",
    title: "Sakleshpura Highlights & Departure",
    subtitle: "Viewpoints, hidden falls & railway trek",
    location: "Sakleshpura",
    slots: [
      {
        period: "Morning",
        activities: [
          {
            time: "5:30 AM – 7:00 AM",
            title: "Bisle Viewpoint (Sunrise)",
            description:
              "Drive ~35 km (1 hr) to Bisle Ghat Viewpoint. On clear days, see Kumara Parvatha, Pushpagiri, and Duduma range in a single panorama.",
            duration: "1.5 hrs",
            tips: "Leave by 5:30 AM. Heavy fog/mist common in July — views may be limited till 8 AM. No entry fee.",
          },
          {
            time: "7:30 AM – 9:30 AM",
            title: "Green Route Railway Trek",
            description:
              "Walk a 5 km section of the historic Sakleshpura–Subramanya railway line through tunnels and bridges (Donigal to Yedakumeri section).",
            duration: "2 hrs",
            tips: "Start from Donigal side. Check train schedule — avoid active rail hours. Headlamp for tunnels. Wear trekking shoes.",
          },
          {
            time: "9:30 AM – 11:00 AM",
            title: "Magod View Point & Magod Falls",
            description:
              "Drive to Magod (~40 km, 1 hr). Viewpoint overlooks deep forest valley; short descent to Magod Falls (River Bedti).",
            duration: "1.5 hrs",
            tips: "Combine both if time allows. July is peak monsoon — falls are at full flow but paths are slippery.",
          },
        ],
      },
      {
        period: "Afternoon",
        activities: [
          {
            time: "11:30 AM – 12:30 PM",
            title: "Pixie Falls",
            description:
              "Hidden cascade near Attihalli (~15 km from Sakleshpura). Short 10-min forest walk to a secluded pool — great for a quick dip.",
            duration: "1 hr",
            tips: "Less crowded on weekdays. No facilities — carry water. Respect local ecology.",
          },
          {
            time: "12:30 PM – 1:30 PM",
            title: "Plantation Walk & Pepper Trail",
            description:
              "Guided estate walk through coffee, cardamom, and pepper vines. Learn intercropping and harvest cycles from estate manager.",
            duration: "1 hr",
          },
          {
            time: "1:30 PM – 2:30 PM",
            title: "Lunch & Checkout",
            description:
              "Final Malnad meal at homestay or Raintree restaurant. Pack bags and begin return journey.",
            duration: "1 hr",
          },
        ],
      },
      {
        period: "Evening",
        activities: [
          {
            time: "2:30 PM onwards",
            title: "Departure",
            description:
              "Return to Bangalore (~250 km, 5 hrs) or Mangalore (~130 km, 3 hrs). Break at Hassan or Sakleshpura town for coffee.",
            duration: "3–5 hrs",
            tips: "Start by 2:30 PM to reach Bangalore before 8 PM. SH 57 merges to NH 75 — watch for ghat curves after Hassan.",
          },
        ],
      },
    ],
    meals: [
      "Breakfast: Filter coffee & idli at homestay before early start",
      "Lunch: Malnad meals at Raintree / estate kitchen",
      "Snacks: Banana chips & coffee from local estate stalls for the road",
    ],
  },
];

export const places: Place[] = [
  {
    id: "mullayanagiri",
    name: "Mullayanagiri",
    location: "chikmagaluru",
    category: "Peak / Trek",
    description:
      "Karnataka's highest peak at 1,930 m with a moderate trek and 360° valley views.",
    bestTime: "7–10 AM or 3–5 PM (avoid midday clouds)",
    duration: "2–3 hrs",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    icon: "⛰️",
    tips: "Parking at base; 15-min walk to summit. Can be cold and windy.",
  },
  {
    id: "baba-budangiri",
    name: "Baba Budangiri",
    location: "chikmagaluru",
    category: "Sacred Hills",
    description:
      "Sacred range named after Sufi saint Baba Budan; rolling shola grasslands and Dattatreya Peeta.",
    bestTime: "Morning (6–9 AM) for clear views",
    duration: "1–2 hrs",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    icon: "🕌",
    tips: "Connected to Mullayanagiri by a trek route (~4 km, experienced trekkers only).",
  },
  {
    id: "hebbe-falls",
    name: "Hebbe Falls",
    location: "chikmagaluru",
    category: "Waterfall",
    description:
      "Two-tier waterfall deep inside Kemmangundi forests, accessible via jeep and short trek.",
    bestTime: "8–11 AM",
    duration: "3–4 hrs (incl. jeep)",
    image:
      "https://images.unsplash.com/photo-1432407692631-0c7457b11785?w=800&q=80",
    icon: "💧",
    tips: "Jeep safari required. Not recommended in heavy monsoon.",
  },
  {
    id: "kemmangundi",
    name: "Kemmangundi",
    location: "chikmagaluru",
    category: "Hill Station",
    description:
      "Raj-era hill retreat with gardens, Z Point sunrise trek, and Kalhatti Falls nearby.",
    bestTime: "Sunrise (5–6:30 AM) at Z Point",
    duration: "Half to full day",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    icon: "🌄",
    tips: "Guest house booking via Jungle Lodges. Carry torch for pre-dawn trek.",
  },
  {
    id: "coffee-plantations",
    name: "Coffee Plantations",
    location: "chikmagaluru",
    category: "Experience",
    description:
      "Arabica estates with guided tours, cupping sessions, and homestay stays amid rows of coffee.",
    bestTime: "10 AM – 4 PM",
    duration: "2–3 hrs",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
    icon: "☕",
    tips: "Harvest season: Nov–Feb. Book tours via homestays or Coffee Yatra Trail.",
  },
  {
    id: "hirekolale-lake",
    name: "Hirekolale Lake",
    location: "chikmagaluru",
    category: "Lake / Sunset",
    description:
      "Serene reservoir surrounded by hills — ideal sunset and birdwatching spot close to town.",
    bestTime: "5:45–6:30 PM (sunset)",
    duration: "45 min – 1 hr",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af04d74000?w=800&q=80",
    icon: "🌅",
    tips: "Free entry. Monsoon evenings can be overcast — go if skies look clear.",
  },
  {
    id: "z-point",
    name: "Z Point",
    location: "chikmagaluru",
    category: "Viewpoint / Trek",
    description:
      "Kemmangundi's iconic sunrise viewpoint — short uphill trek through misty shola forest.",
    bestTime: "5:30–6:30 AM (sunrise)",
    duration: "45 min trek + viewing",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    icon: "🌤️",
    tips: "Arrive before dawn. Weekends get crowded — go midweek if possible.",
  },
  {
    id: "kalhatti-falls",
    name: "Kalhatti Falls",
    location: "chikmagaluru",
    category: "Waterfall",
    description:
      "122 m cascade near Kemmangundi with ancient Veerabhadra temple at the base.",
    bestTime: "7–10 AM",
    duration: "1–1.5 hrs",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a8dba?w=800&q=80",
    icon: "🏞️",
    tips: "Slippery steps near falls. Monkeys in the area.",
  },
  {
    id: "manjarabad-fort",
    name: "Manjarabad Fort",
    location: "sakleshpura",
    category: "Heritage / Fort",
    description:
      "Eight-pointed star fort on a hilltop built by Tipu Sultan with sweeping ghat panoramas.",
    bestTime: "4:30–6:30 PM (sunset)",
    duration: "1.5–2 hrs",
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
    icon: "🏰",
    tips: "~450 steps. Free entry. Windy at top — carry a layer.",
  },
  {
    id: "bisle-viewpoint",
    name: "Bisle Viewpoint",
    location: "sakleshpura",
    category: "Viewpoint",
    description:
      "Famous ghat viewpoint with views of three mountain ranges on clear days.",
    bestTime: "6–8 AM (post-sunrise clarity)",
    duration: "1 hr",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    icon: "👁️",
    tips: "35 km from Sakleshpura — start early. In July, fog may linger till 8–9 AM.",
  },
  {
    id: "pixie-falls",
    name: "Pixie Falls",
    location: "sakleshpura",
    category: "Waterfall",
    description:
      "Secluded forest waterfall near Attihalli with a natural pool — off the main tourist trail.",
    bestTime: "9–11 AM",
    duration: "1 hr",
    image:
      "https://images.unsplash.com/photo-1544551763-77a5c64a8617?w=800&q=80",
    icon: "🧚",
    tips: "No shops nearby. Leave no trace.",
  },
  {
    id: "magod-viewpoint",
    name: "Magod View Point",
    location: "sakleshpura",
    category: "Viewpoint / Falls",
    description:
      "Deep valley overlook near Magod Falls where River Bedti plunges into dense forest.",
    bestTime: "9 AM – 12 PM",
    duration: "1.5–2 hrs",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    icon: "🌲",
    tips: "~40 km drive. Combine with Magod Falls in same trip.",
  },
  {
    id: "sakleshpura-plantations",
    name: "Estate Plantations",
    location: "sakleshpura",
    category: "Experience",
    description:
      "Coffee, pepper, and cardamom estates with homestays offering guided plantation walks.",
    bestTime: "8–11 AM",
    duration: "1–2 hrs",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac6d55e?w=800&q=80",
    icon: "🌿",
    tips: "Most homestays include free estate walks for guests.",
  },
  {
    id: "railway-trek",
    name: "Green Route Railway Trek",
    location: "sakleshpura",
    category: "Trek / Adventure",
    description:
      "Historic railway line through tunnels and bridges — one of Karnataka's most scenic walks.",
    bestTime: "6:30–9 AM (check train timings)",
    duration: "2–3 hrs (5 km section)",
    image:
      "https://images.unsplash.com/photo-1478131143081-5f291fae6c55?w=800&q=80",
    icon: "🚂",
    tips: "Avoid when trains are scheduled. Headlamp for tunnels. Trekking shoes essential.",
  },
];

export const foodSpots: FoodSpot[] = [
  {
    name: "Town Canteen",
    location: "chikmagaluru",
    specialty: "Akki Rotti, Filter Coffee",
    note: "Iconic local breakfast spot since 1965. Arrive before 9 AM on weekends.",
  },
  {
    name: "Machali",
    location: "chikmagaluru",
    specialty: "Neer Dosa, Fish Curry",
    note: "Coastal-Malnad fusion. Try the koli saaru (chicken curry) with rice.",
  },
  {
    name: "Hotel Mayura (KSTDC)",
    location: "chikmagaluru",
    specialty: "Malnad Veg Thali",
    note: "Reliable, clean thali meals near bus stand. Good for lunch pit stops.",
  },
  {
    name: "Coffee Barn Café",
    location: "chikmagaluru",
    specialty: "Single-origin pour-over, Cold brew",
    note: "Specialty coffee bar on MG Road. Ask for estate-specific beans.",
  },
  {
    name: "Serai Coffee Estate Tasting",
    location: "chikmagaluru",
    specialty: "Cupping session, Estate tour",
    note: "Book ahead for guided tasting with flavour notes (₹500–1,000).",
  },
  {
    name: "Raintree Restaurant",
    location: "sakleshpura",
    specialty: "Malnad Chicken, Bamboo Shoot Curry",
    note: "Popular lunch spot on BM Road. Serves authentic local fare.",
  },
  {
    name: "Estate Homestay Kitchens",
    location: "both",
    specialty: "Pepper chicken, Akki roti, Estate filter coffee",
    note: "Best meals are often at your homestay — request local specialties in advance.",
  },
];

export const stayOptions: StayOption[] = [
  {
    name: "The Serai Chickmagalur",
    location: "chikmagaluru",
    type: "resort",
    priceRange: "₹12,000–18,000/night",
    highlights: [
      "Luxury plantation resort with pool & spa",
      "In-house coffee tasting & estate walks",
      "Fine dining with Malnad cuisine",
    ],
    contact: "theserai.in",
  },
  {
    name: "Java Rain Resort",
    location: "chikmagaluru",
    type: "resort",
    priceRange: "₹8,000–14,000/night",
    highlights: [
      "Hillside villas amid coffee estate",
      "Infinity pool overlooking ghats",
      "Plantation tour included",
    ],
    contact: "javainresorts.com",
  },
  {
    name: "Macchi Homestay",
    location: "chikmagaluru",
    type: "homestay",
    priceRange: "₹2,500–4,000/night",
    highlights: [
      "Family-run estate homestay",
      "Home-cooked Malnad meals",
      "Personalized plantation & trek guidance",
    ],
  },
  {
    name: "The Hills Sahyadri",
    location: "sakleshpura",
    type: "resort",
    priceRange: "₹6,000–10,000/night",
    highlights: [
      "Plantation resort with valley views",
      "Bonfire evenings & nature walks",
      "Close to Manjarabad Fort",
    ],
  },
  {
    name: "Deva Homestay",
    location: "sakleshpura",
    type: "homestay",
    priceRange: "₹2,000–3,500/night",
    highlights: [
      "Working coffee-pepper estate",
      "Authentic local food & filter coffee",
      "Arranges jeep for Bisle & Magod trips",
    ],
  },
];

export const packingList: PackingItem[] = [
  {
    category: "Clothing",
    items: [
      "Light layers ( mornings cold, afternoons warm)",
      "Waterproof jacket / poncho (July monsoon rains)",
      "Leech socks or salt pouch for forest treks",
      "Trekking shoes with good grip",
      "Extra socks & quick-dry clothes",
      "Cap / hat and sunglasses",
    ],
  },
  {
    category: "Essentials",
    items: [
      "Torch / headlamp (sunrise treks & railway tunnels)",
      "Reusable water bottles",
      "Sunscreen SPF 50+ & insect repellent",
      "Basic first-aid kit & personal meds",
      "Power bank (patchy signal drains battery)",
    ],
  },
  {
    category: "Documents & Permits",
    items: [
      "Valid ID (forest checkpoints may ask)",
      "Hebbe Falls jeep booking confirmation",
      "Kemmangundi guest house pass (if staying)",
      "Vehicle papers & insurance",
      "Cash (₹3,000–5,000 — ATMs sparse in ghats)",
    ],
  },
  {
    category: "Photography & Extras",
    items: [
      "Camera / phone with wide-angle lens",
      "Binoculars (Bisle Viewpoint)",
      "Snacks for long drives & treks",
      "Dry bag for waterfall visits",
      "Small backpack for day trips",
    ],
  },
];

export const tips: Tip[] = [
  {
    title: "Weather in July",
    content:
      "Daytime 20–26°C, nights 16–20°C. Peak monsoon — expect daily rain, mist, and full waterfalls. Treks can be slippery; leeches common on forest trails. Check road conditions before ghat drives.",
    icon: "🌦️",
  },
  {
    title: "Permits & Entry",
    content:
      "Mullayanagiri, Manjarabad Fort, Hirekolale Lake: free. Hebbe Falls: jeep permit at Kemmangundi (~₹800–1,200). Kemmangundi gardens: nominal fee. Railway trek: no permit, but check train schedule with station master.",
    icon: "📋",
  },
  {
    title: "Driving Tips",
    content:
      "Ghat roads are winding — use engine braking, honk on blind curves. Fill fuel in Chikmagaluru/Sakleshpura town. Avoid night driving on SH 57 — poor visibility and wildlife.",
    icon: "🚗",
  },
  {
    title: "Mobile Connectivity",
    content:
      "4G patchy at Mullayanagiri, Kemmangundi, Bisle, and railway trek. Download offline maps. Inform homestay before heading to remote spots.",
    icon: "📶",
  },
  {
    title: "Best Photography Times",
    content:
      "Sunrise: Z Point, Bisle Viewpoint. Golden hour: Hirekolale Lake, Manjarabad Fort. Waterfalls: 8–11 AM for soft, even light without harsh shadows.",
    icon: "📸",
  },
  {
    title: "Responsible Travel",
    content:
      "Carry back all plastic waste. Avoid loud music on treks. Do not feed monkeys. Stay on marked paths at waterfalls — rocks are deceptively slippery.",
    icon: "♻️",
  },
];
