export type DestinationCard = {
  slug: string;
  title: string;
  highlights: string[];
  image: string;
  tag: string;
};

export const DESTINATION_PAGE_CARDS: DestinationCard[] = [
  {
    slug: "golden-triangle",
    title: "Golden Triangle",
    highlights: ["Delhi", "Agra", "Jaipur"],
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    tag: "Heritage Circuit",
  },
  {
    slug: "north-india",
    title: "North India",
    highlights: ["Delhi", "Rajasthan"],
    image:
      "https://images.unsplash.com/photo-1595658658481-bbf7b8c1c6a5?auto=format&fit=crop&w=1200&q=80",
    tag: "Royal North",
  },
  {
    slug: "south-india",
    title: "South India",
    highlights: ["Kerala", "Vellankani", "Pondicherry"],
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc39c994?auto=format&fit=crop&w=1200&q=80",
    tag: "Coastal & Sacred",
  },
  {
    slug: "west-india",
    title: "West India",
    highlights: ["Mumbai", "Goa"],
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=80",
    tag: "Metro & Shores",
  },
  {
    slug: "hill-stations",
    title: "Hill Stations",
    highlights: ["Shimla", "Manali", "Dharamshala", "Nainital"],
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    tag: "Mountains",
  },
  {
    slug: "rishikesh",
    title: "Rishikesh",
    highlights: ["Adventure", "Spiritual gateway", "Ganga Aarti"],
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1200&q=80",
    tag: "Adventure & Spirit",
  },
];
