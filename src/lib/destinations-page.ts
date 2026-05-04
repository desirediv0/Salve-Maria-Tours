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
      "/Golden Triangle.jpg",
    tag: "Heritage Circuit",
  },
  {
    slug: "north-india",
    title: "North India",
    highlights: ["Delhi", "Rajasthan"],
    image:
      "/Rajasthan.jpg",
    tag: "Royal North",
  },
  {
    slug: "south-india",
    title: "South India",
    highlights: ["Kerala", "Vellankani", "Pondicherry"],
    image:
      "/Kerala Backwaters.jpg",
    tag: "Coastal & Sacred",
  },
  {
    slug: "west-india",
    title: "West India",
    highlights: ["Mumbai", "Goa"],
    image:
      "/Goa.jpg",
    tag: "Metro & Shores",
  },
  {
    slug: "hill-stations",
    title: "Hill Stations",
    highlights: ["Shimla", "Manali", "Dharamshala", "Nainital"],
    image:
      "/Shimla & Manali.jpg",
    tag: "Mountains",
  },
  {
    slug: "rishikesh",
    title: "Rishikesh",
    highlights: ["Adventure", "Spiritual gateway", "Ganga Aarti"],
    image:
      "/Rishikesh.jpg",
    tag: "Adventure & Spirit",
  },
];
