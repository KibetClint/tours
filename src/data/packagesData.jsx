const packagesData = [
  {
    id: 1,
    destination: "Serengeti, Tanzania",
    activities: ["Wildlife Safaris", "Hot Air Balloon Rides", "Nature Walks"],
    description: "Discover the Great Migration and diverse wildlife in the Serengeti.",
    price: 1800,
    itinerary: [
      { day: 1, details: "Arrival in Serengeti and check-in at the lodge" },
      { day: 2, details: "Full-day safari exploring the Great Migration" },
      { day: 3, details: "Morning nature walk and departure." },
    ],
    reviews: [
      { name: "Emily Clark", comment: "The views of Mount Kilimanjaro are unforgettable!", rating: 4.7 },
      { name: "Paul Adams", comment: "The elephants are truly majestic.", rating: 5 },
    ],
    promotions: "Get a free photography workshop on booking this package!",
    image: "/images/D1.webp",
  },
  {
    id: 2,
    destination: "Amboseli, Kenya",
    activities: ["Elephant Viewing", "Mount Kilimanjaro Views", "Photography"],
    description: "Experience Amboseli's breathtaking views and iconic elephant herds.",
    price: 1500,
    itinerary: [
      { day: 1, details: "Arrival at Amboseli and evening safari." },
      { day: 2, details: "Full-day game drive with picnic lunch." },
      { day: 3, details: "Morning photography session and departure." },
    ],
    reviews: [
      { name: "Emily Clark", comment: "The views of Mount Kilimanjaro are unforgettable!", rating: 4.7 },
      { name: "Paul Adams", comment: "The elephants are truly majestic.", rating: 5 },
    ],
    promotions: "Get a free photography workshop on booking this package!",
    image: "/images/D6.jpg",
  },
  // Add more package objects as needed...
];

export default packagesData;
