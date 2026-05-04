export type PilgrimageSite = {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
};

export const PILGRIMAGE_BY_REGION: Record<
  "south" | "west" | "north",
  PilgrimageSite[]
> = {
  south: [
    {
      id: "kuravilangad",
      name: "St. Mary's Martha Mariyam",
      location: "Kuravilangad, Kerala",
      description:
        "Believed to be where Mother Mary first appeared in the world.",
      image:
        "/St. Mary's Martha Mariyam.jpg",
    },
    {
      id: "bharananganam",
      name: "St. Mary's Forane Church",
      location: "Bharananganam, Kerala",
      description:
        "Contains the tomb of St. Alphonsa, first Catholic saint of India. Canonized by Pope Benedict XVI on 12 October 2008.",
      image:
        "/St. Mary's Forane Church.jpg",
    },
    {
      id: "vellankani",
      name: "Basilica of Our Lady of Good Health",
      location: "Vellankani, Tamil Nadu",
      description:
        "16th-century Marian apparition shrine, 'Lourdes of the East', attracts millions of pilgrims annually.",
      image:
        "/Basilica of Our Lady of Good Health.jpg",
    },
  ],
  west: [
    {
      id: "bom-jesus",
      name: "Basilica of Bom Jesus",
      location: "Goa",
      description:
        "Oldest church in Goa, houses remains of St. Francis Xavier ('Goencho Saib'), co-founder of the Jesuits.",
      image:
        "/Basilica of Bom Jesus.jpg",
    },
    {
      id: "se-cathedral",
      name: "Se Cathedral",
      location: "Goa",
      description:
        "Cathedral of the Latin Church Archdiocese of Goa, UNESCO World Heritage Site.",
      image:
        "/Se Cathedral.jpg",
    },
    {
      id: "st-thomas-mumbai",
      name: "St. Thomas' Cathedral",
      location: "Mumbai",
      description:
        "300-year-old Anglican cathedral named after Saint Thomas the Apostle.",
      image:
        "/St. Thomas' Cathedral.jpg",
    },
  ],
  north: [
    {
      id: "sacred-heart-delhi",
      name: "Sacred Heart Cathedral",
      location: "New Delhi",
      description:
        "Popular pilgrimage site with a statue of Jesus Christ believed to have miraculous powers.",
      image:
        "/Sacred Heart Cathedral.jpg",
    },
    {
      id: "sardhana",
      name: "Basilica of Our Lady of Graces",
      location: "Sardhana",
      description:
        "Built in 1822 by Begum Samru, dedicated to the Virgin Mary and miraculous healings.",
      image:
        "/Basilica of Our Lady of Graces.jpg",
    },
    {
      id: "st-jude-jhansi",
      name: "St. Jude Shrine",
      location: "Jhansi",
      description:
        "Founded by Bishop F.X. Fenech during WWII, dedicated to St. Jude Thaddaeus.",
      image:
        "/St. Jude Shrine.jpg",
    },
  ],
};
