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
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "bharananganam",
      name: "St. Mary's Forane Church",
      location: "Bharananganam, Kerala",
      description:
        "Contains the tomb of St. Alphonsa, first Catholic saint of India. Canonized by Pope Benedict XVI on 12 October 2008.",
      image:
        "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "vellankani",
      name: "Basilica of Our Lady of Good Health",
      location: "Vellankani, Tamil Nadu",
      description:
        "16th-century Marian apparition shrine, 'Lourdes of the East', attracts millions of pilgrims annually.",
      image:
        "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=80",
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
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "se-cathedral",
      name: "Se Cathedral",
      location: "Goa",
      description:
        "Cathedral of the Latin Church Archdiocese of Goa, UNESCO World Heritage Site.",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "st-thomas-mumbai",
      name: "St. Thomas' Cathedral",
      location: "Mumbai",
      description:
        "300-year-old Anglican cathedral named after Saint Thomas the Apostle.",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=900&q=80",
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
        "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "sardhana",
      name: "Basilica of Our Lady of Graces",
      location: "Sardhana",
      description:
        "Built in 1822 by Begum Samru, dedicated to the Virgin Mary and miraculous healings.",
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "st-jude-jhansi",
      name: "St. Jude Shrine",
      location: "Jhansi",
      description:
        "Founded by Bishop F.X. Fenech during WWII, dedicated to St. Jude Thaddaeus.",
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=900&q=80",
    },
  ],
};
