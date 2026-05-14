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
      name: "St. Mary's Church Kuravilangad",
      location: "Kuravilangad, Kerala",
      description:
        "St. Mary's Church Kuravilangad is one of the oldest Christian pilgrimage centers in Kerala, believed to have been built in 105 AD. According to tradition, Mother Mary appeared to children here and asked them to build a church where a miraculous spring appeared. The spring still exists today, making the church an important and sacred site for Christians.",
      image: "/st-marys-martha-mariyam.jpeg",
    },
    {
      id: "bharananganam",
      name: "St. Mary's Forane Church",
      location: "Bharananganam, Kerala",
      description:
        "St. Mary's Forane Church is a famous Catholic church in Kerala and an important pilgrimage center known as the resting place of Saint Alphonsa, the first woman saint of India. Thousands of devotees visit the church every year to pray and seek blessings.",
      image: "/st-marys-forane-church.png",
    },
    {
      id: "vellankani",
      name: "Basilica of Our Lady of Good Health",
      location: "Vellankani, Tamil Nadu",
      description:
        "Basilica of Our Lady of Good Health, popularly known as Velankanni Church, is one of the most famous Christian pilgrimage centers in Tamil Nadu. Dedicated to Mother Mary, the church is known for miraculous healings and is often called the “Lourdes of the East.” Thousands of devotees from different religions visit the basilica every year to pray and seek blessings.",
      image: "/basilica-of-our-lady-of-good-health.png",
    },
    {
      id: "san-thome",
      name: "San Thome Basilica",
      location: "Chennai, Tamil Nadu",
      description:
        "San Thome Basilica is a historic Catholic church built over the tomb of Saint Thomas the Apostle, who is believed to have preached Christianity in India. Located in Chennai, the church is one of the few churches in the world built over the tomb of an apostle of Jesus. Known for its beautiful Neo-Gothic architecture, it is an important pilgrimage and tourist destination in India.",
      image: "/san-thome-basilica.png",
    },
  ],
  west: [
    {
      id: "bom-jesus",
      name: "Basilica of Bom Jesus",
      location: "Goa",
      description:
        "Basilica of Bom Jesus is one of the oldest and most famous churches in Goa and a UNESCO World Heritage Site. Built in 1605, the church is renowned for housing the mortal remains of Saint Francis Xavier, one of the most respected Christian missionaries in Asia. The basilica is admired for its beautiful Baroque architecture and attracts thousands of pilgrims and tourists every year.",
      image: "/basilica-of-bom-jesus-goa.webp",
    },
    {
      id: "se-cathedral",
      name: "Se Cathedral",
      location: "Goa",
      description:
        "Cathedral of the Latin Church Archdiocese of Goa, UNESCO World Heritage Site.",
      image: "/se-cathedral.jpg",
    },
    {
      id: "st-thomas-mumbai",
      name: "St. Thomas' Cathedral",
      location: "Mumbai",
      description:
        "300-year-old Anglican cathedral named after Saint Thomas the Apostle.",
      image: "/st-thomas-cathedral.png",
    },
  ],
  north: [
    {
      id: "sacred-heart-delhi",
      name: "Sacred Heart Cathedral",
      location: "New Delhi",
      description:
        "Sacred Heart Cathedral is one of the oldest and largest Catholic churches in New Delhi. Built in 1930, the cathedral is known for its beautiful Italian-style architecture, peaceful atmosphere, and grand Christmas celebrations. It serves as the main cathedral of the Catholic Archdiocese of Delhi and is an important place of worship for Christians in the capital city.",
      image: "/sacred-heart-cathedral.png",
    },
    {
      id: "sardhana",
      name: "Basilica of Our Lady of Graces",
      location: "Sardhana, Uttar Pradesh",
      description:
        "Basilica of Our Lady of Graces is a historic Catholic basilica located in Sardhana near Meerut. Built in 1822 by Begum Samru, the church is famous for its stunning European-style architecture and spiritual significance. It is one of the largest churches in North India and attracts pilgrims and tourists from across the country.",
      image: "/basilica-of-our-lady-of-graces.png",
    },
    {
      id: "st-jude-jhansi",
      name: "St. Jude Shrine",
      location: "Jhansi, Uttar Pradesh",
      description:
        "St. Jude Shrine is a well-known Catholic pilgrimage center in Jhansi dedicated to Saint Jude. The shrine is famous for its peaceful atmosphere and strong devotion among believers who visit to pray for hope, healing, and blessings. It attracts thousands of devotees, especially during the annual feast celebrations.",
      image: "/st-jude-shrine.png",
    },
  ],
};
