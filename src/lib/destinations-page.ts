export type DestinationCard = {
  slug: string;
  title: string;
  highlights: string[];
  images: string[];
  tag: string;
};

export const DESTINATION_PAGE_CARDS: DestinationCard[] = [
  {
    slug: "golden-triangle",
    title: "Golden Triangle",
    highlights: ["Delhi", "Agra", "Jaipur"],
    images: ["/india-gate.jpg", "/agra.jpg", "/hawa-mahal.jpg"],
    tag: "Heritage Circuit",
  },
  {
    slug: "north-india",
    title: "North India",
    highlights: ["Delhi", "Rajasthan", "Punjab", "Agra"],
    images: ["/rajasthan.jpg", "/rajasthan-2.jpg"],
    tag: "Royal North",
  },
  {
    slug: "south-india",
    title: "South India",
    highlights: ["Kerala", "Vellankani", "Pondicherry"],
    images: ["/kerala.jpg", "/kerala-2.jpg", "/vellankani.jpg"],
    tag: "Coastal & Sacred",
  },
  {
    slug: "west-india",
    title: "West India",
    highlights: ["Mumbai", "Goa"],
    images: ["/goa.jpg", "/goa-2.jpg", "/mumbai.jpg"],
    tag: "Metro & Shores",
  },
  {
    slug: "hill-stations",
    title: "Hill Stations",
    highlights: ["Shimla", "Manali", "Dharamshala", "Nainital"],
    images: ["/shimla-and-manali.jpg", "/shimla-and-manali-2.jpg"],
    tag: "Mountains",
  },
];
