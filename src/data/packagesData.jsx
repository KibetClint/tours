const packagesData = [
  {
    id:1,
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
    {
      id: 3,
      destination: "Serengeti, Tanzania",
      activities: ["Wildlife Safaris", "Hot Air Balloon Rides", "Nature Walks"],
      description: "Discover the Great Migration and diverse wildlife in the Serengeti.",
      price: 1800,
      itinerary: [
        { day: 1, details: "Arrival in Serengeti and check-in at the lodge." },
        { day: 2, details: "Full-day safari exploring the Great Migration." },
        { day: 3, details: "Morning nature walk and departure." },
      ],
      reviews: [
        { name: "Jane Doe", comment: "Amazing experience!", rating: 5 },
        { name: "John Smith", comment: "Highly recommend the hot air balloon ride!", rating: 4.5 },
      ],
      promotions: "Book before January 31 and get 10% off!",
      image: "/images/D5.jpg",
    },
    {
      id: 4,
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
      image: "/images/D2.webp",
    },
    {
      id: 5,
      destination: "Serengeti, Tanzania",
      activities: ["Wildlife Safaris", "Hot Air Balloon Rides", "Nature Walks"],
      description: "Discover the Great Migration and diverse wildlife in the Serengeti.",
      price: 1800,
      itinerary: [
        { day: 1, details: "Arrival in Serengeti and check-in at the lodge." },
        { day: 2, details: "Full-day safari exploring the Great Migration." },
        { day: 3, details: "Morning nature walk and departure." },
      ],
      reviews: [
        { name: "Jane Doe", comment: "Amazing experience!", rating: 5 },
        { name: "John Smith", comment: "Highly recommend the hot air balloon ride!", rating: 4.5 },
      ],
      promotions: "Book before January 31 and get 10% off!",
      image: "/images/D3.jpg",
    },
    {
      id: 6,
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
      image: "/images/D4.jpg",
    },
    {
      id: 7,
      destination: "Bali, Indonesia",
      activities: ["Beach Relaxation", "Cultural Dance", "Temple Visits"],
      description: "Enjoy Bali's tropical paradise, rich culture, and serene beaches.",
      price: 1700,
      itinerary: [
        { day: 1, details: "Arrival and check-in at a beach resort." },
        { day: 2, details: "Explore local temples and cultural dance performances." },
        { day: 3, details: "Relax on the beach and depart." },
      ],
      reviews: [
        { name: "Putri Wulandari", comment: "Bali is a slice of heaven.", rating: 4.8 },
        { name: "Adi Santoso", comment: "A perfect escape from the everyday.", rating: 5 },
      ],
      promotions: "Free spa session with every booking!",
      image: "/images/D7.jpg",
    },
    {
      id: 8,
      destination: "Maldives",
      activities: ["Snorkeling", "Private Island Dinners", "Water Sports"],
      description: "Relax in luxury on the pristine islands of the Maldives.",
      price: 3000,
      itinerary: [
        { day: 1, details: "Arrival and resort check-in with beach relaxation." },
        { day: 2, details: "Enjoy snorkeling and water sports." },
        { day: 3, details: "Private island dinner and departure." },
      ],
      reviews: [
        { name: "Aisha Mohamed", comment: "A luxurious and serene getaway.", rating: 5 },
        { name: "Ravi Kumar", comment: "An unparalleled tropical experience.", rating: 4.8 },
      ],
      promotions: "Complimentary underwater adventure experience included!",
      image: "/images/D8.webp",
    },
    {
      id: 9,
      destination: "Barcelona, Spain",
      activities: ["Gaudi Architecture", "Beach Walks", "Tapas Tours"],
      description: "Explore the vibrant culture and unique architecture of Barcelona.",
      price: 1900,
      itinerary: [
        { day: 1, details: "Arrival and guided city tour." },
        { day: 2, details: "Visit Gaudi landmarks and savor local tapas." },
        { day: 3, details: "Relax by the beach and depart." },
      ],
      reviews: [
        { name: "Carlos Garcia", comment: "A visual and culinary delight!", rating: 4.7 },
        { name: "Isabella Martinez", comment: "Barcelona stole my heart.", rating: 5 },
      ],
      promotions: "Free local cooking class on booking!",
      image: "/images/D9.webp",
    },
    {
      id: 10,
      destination: "Sydney, Australia",
      activities: ["Harbour Cruise", "Opera House Tour", "Beach Visits"],
      description: "Discover the iconic sights and vibrant lifestyle of Sydney.",
      price: 2600,
      itinerary: [
        { day: 1, details: "Arrival and scenic harbour cruise." },
        { day: 2, details: "Visit the Opera House and explore the city." },
        { day: 3, details: "Relax at Bondi Beach and depart." },
      ],
      reviews: [
        { name: "Olivia Brown", comment: "Sydney is simply amazing!", rating: 4.8 },
        { name: "Liam Wilson", comment: "A blend of culture and coastal beauty.", rating: 4.7 },
      ],
      promotions: "Limited time offer: free city tour included!",
      image: "/images/D10.webp",
    },
    {
      id: 11,
      destination: "Rio de Janeiro, Brazil",
      activities: ["Christ the Redeemer", "Samba Dance", "Beach Parties"],
      description: "Experience the vibrant energy and famous landmarks of Rio.",
      price: 2100,
      itinerary: [
        { day: 1, details: "Arrival and city sightseeing." },
        { day: 2, details: "Visit Christ the Redeemer and enjoy a samba workshop." },
        { day: 3, details: "Spend time at Copacabana beach and depart." },
      ],
      reviews: [
        { name: "Ana Silva", comment: "Rio was full of life and color!", rating: 4.7 },
        { name: "Pedro Costa", comment: "An exhilarating cultural experience.", rating: 5 },
      ],
      promotions: "Book now for a complimentary samba lesson!",
      image: "/images/D11.webp",
    },
    {
      id: 12,
      destination: "Cape Town, South Africa",
      activities: ["Table Mountain Hike", "Winery Tours", "Coastal Drives"],
      description: "Explore Cape Town's stunning landscapes and vibrant culture.",
      price: 2200,
      itinerary: [
        { day: 1, details: "Arrival and a scenic city tour." },
        { day: 2, details: "Hike Table Mountain and visit local wineries." },
        { day: 3, details: "Enjoy a coastal drive and depart." },
      ],
      reviews: [
        { name: "Thabo Mbeki", comment: "A perfect blend of nature and culture.", rating: 4.8 },
        { name: "Nomsa Dlamini", comment: "Cape Town is simply breathtaking.", rating: 5 },
      ],
      promotions: "Enjoy a free winery tasting tour with your booking!",
      image: "/images/D12.webp",
    },
    {
      id: 13,
      destination: "Dubai, UAE",
      activities: ["Desert Safari", "Burj Khalifa Visit", "Luxury Shopping"],
      description: "Experience the opulence and futuristic architecture of Dubai.",
      price: 2400,
      itinerary: [
        { day: 1, details: "Arrival and thrilling desert safari." },
        { day: 2, details: "Visit Burj Khalifa and shop in luxury malls." },
        { day: 3, details: "Explore cultural sites and depart." },
      ],
      reviews: [
        { name: "Fatima Al Maktoum", comment: "Dubai dazzles with its grandeur.", rating: 4.9 },
        { name: "Omar Khan", comment: "An extraordinary mix of modernity and tradition.", rating: 5 },
      ],
      promotions: "Book now and get a complimentary desert excursion!",
      image: "/images/D13.webp",
    },
    {
      id: 14,
      destination: "London, UK",
      activities: ["Historical Landmarks", "West End Shows", "River Thames Cruise"],
      description: "Discover London's rich history and vibrant modern life.",
      price: 2300,
      itinerary: [
        { day: 1, details: "Arrival and historic city tour." },
        { day: 2, details: "Visit museums and enjoy a West End show." },
        { day: 3, details: "Thames River cruise and departure." },
      ],
      reviews: [
        { name: "Emily Johnson", comment: "London offers endless charm!", rating: 4.8 },
        { name: "William Smith", comment: "A memorable and diverse experience.", rating: 4.7 },
      ],
      promotions: "Early booking discount available—reserve today!",
      image: "/images/D14.webp",
    },
    {
      id: 15,
      destination: "Machu Picchu, Peru",
      activities: ["Inca Trail", "Historical Ruins", "Mountain Views"],
      description: "Explore the ancient Incan citadel and stunning Andean landscapes.",
      price: 2500,
      itinerary: [
        { day: 1, details: "Arrival and acclimatization." },
        { day: 2, details: "Guided hike along the Inca Trail." },
        { day: 3, details: "Explore Machu Picchu and depart." },
      ],
      reviews: [
        { name: "Sofia Rivera", comment: "A mystical and inspiring journey!", rating: 4.9 },
        { name: "Diego Morales", comment: "History and nature perfectly combined.", rating: 5 },
      ],
      promotions: "Limited spots available—book for an exclusive tour!",
      image: "/images/D15.webp",
    },
    {
      id: 16,
      destination: "Santorini, Greece",
      activities: ["Sunset Views", "Wine Tasting", "Volcano Tours"],
      description: "Enjoy the stunning views and romantic charm of Santorini.",
      price: 2100,
      itinerary: [
        { day: 1, details: "Arrival and island exploration." },
        { day: 2, details: "Wine tasting and volcano tour." },
        { day: 3, details: "Sunset cruise and departure." },
      ],
      reviews: [
        { name: "Elena Papadopoulos", comment: "Santorini is pure magic!", rating: 4.8 },
        { name: "Nikos Georgiou", comment: "A dreamy escape with unforgettable views.", rating: 5 },
      ],
      promotions: "Book now and receive a complimentary wine tasting!",
      image: "/images/D16.webp",
    },
    {
      id: 17,
      destination: "Bora Bora, French Polynesia",
      activities: ["Overwater Bungalows", "Snorkeling", "Lagoon Cruises"],
      description: "Experience the luxury and beauty of Bora Bora's turquoise waters.",
      price: 3200,
      itinerary: [
        { day: 1, details: "Arrival and check-in at an overwater bungalow." },
        { day: 2, details: "Snorkeling adventure and lagoon cruise." },
        { day: 3, details: "Leisure day and departure." },
      ],
      reviews: [
        { name: "Saina Ture", comment: "Pure paradise on earth!", rating: 5 },
        { name: "Matea Fetu", comment: "Bora Bora redefines luxury.", rating: 4.9 },
      ],
      promotions: "Book now for a free lagoon excursion!",
      image: "/images/D17.webp",
    },
    {
      id: 18,
      destination: "Banff, Canada",
      activities: ["Mountain Hiking", "Lake Cruises", "Wildlife Watching"],
      description: "Explore the natural beauty and adventure of Banff National Park.",
      price: 2000,
      itinerary: [
        { day: 1, details: "Arrival and scenic mountain drive." },
        { day: 2, details: "Guided mountain hike and lake cruise." },
        { day: 3, details: "Wildlife spotting tour and departure." },
      ],
      reviews: [
        { name: "Oliver Martin", comment: "Banff is a nature lover’s dream.", rating: 4.8 },
        { name: "Emma Thompson", comment: "Breathtaking landscapes at every turn.", rating: 5 },
      ],
      promotions: "Early bird discount with a complimentary park guide!",
      image: "/images/D18.webp",
    },
    {
      id: 19,
      destination: "Great Barrier Reef, Australia",
      activities: ["Scuba Diving", "Snorkeling", "Marine Life Tours"],
      description: "Discover the vibrant underwater world of the Great Barrier Reef.",
      price: 2800,
      itinerary: [
        { day: 1, details: "Arrival and beach relaxation." },
        { day: 2, details: "Diving and snorkeling adventure." },
        { day: 3, details: "Marine life exploration and departure." },
      ],
      reviews: [
        { name: "Jack Wilson", comment: "An unforgettable underwater journey.", rating: 4.9 },
        { name: "Ava Brown", comment: "The coral reefs were stunning!", rating: 4.8 },
      ],
      promotions: "Book now and enjoy a free diving session!",
      image: "/images/D19.webp",
    },
    {
      id: 20,
      destination: "Reykjavik, Iceland",
      activities: ["Northern Lights Tours", "Glacier Hikes", "Hot Springs"],
      description: "Experience the unique landscapes and natural wonders of Iceland.",
      price: 2700,
      itinerary: [
        { day: 1, details: "Arrival and Reykjavik city tour." },
        { day: 2, details: "Glacier hike and hot spring visit." },
        { day: 3, details: "Northern Lights tour and departure." },
      ],
      reviews: [
        { name: "Bjorn Eriksen", comment: "Iceland’s beauty is otherworldly.", rating: 5 },
        { name: "Ingrid Olafsdottir", comment: "A magical experience under the auroras.", rating: 4.9 },
      ],
      promotions: "Limited time offer: free geothermal spa access!",
      image: "/images/D20.webp",
    },
    {
      id: 21,
      destination: "Petra, Jordan",
      activities: ["Ancient Ruins", "Desert Tours", "Cultural Experiences"],
      description: "Explore the ancient rock-cut architecture and history of Petra.",
      price: 2300,
      itinerary: [
        { day: 1, details: "Arrival and introductory city tour." },
        { day: 2, details: "Guided tour of the Petra ruins." },
        { day: 3, details: "Desert adventure and departure." },
      ],
      reviews: [
        { name: "Layla Hussein", comment: "Petra is a true wonder of the world.", rating: 5 },
        { name: "Omar Faris", comment: "An awe-inspiring journey into history.", rating: 4.8 },
      ],
      promotions: "Book now and receive a free cultural excursion!",
      image: "/images/D21.webp",
    },
    {
      id: 22,
      destination: "Cairo, Egypt",
      activities: ["Pyramids", "Nile Cruise", "Ancient History Tours"],
      description: "Discover the wonders of ancient Egypt with visits to the pyramids and the Nile.",
      price: 1900,
      itinerary: [
        { day: 1, details: "Arrival and Cairo city tour." },
        { day: 2, details: "Visit the Pyramids and the Sphinx." },
        { day: 3, details: "Enjoy a Nile cruise and depart." },
      ],
      reviews: [
        { name: "Amina Hassan", comment: "Egypt is steeped in mystery and history.", rating: 4.8 },
        { name: "Youssef El-Sayed", comment: "A journey back in time.", rating: 5 },
      ],
      promotions: "Special offer: complimentary Egyptian dinner experience!",
      image: "/images/D22.webp",
    },
    {
      id: 23,
      destination: "Hong Kong, China",
      activities: ["City Skyline", "Cultural Markets", "Culinary Tours"],
      description: "Experience the vibrant fusion of modernity and tradition in Hong Kong.",
      price: 2400,
      itinerary: [
        { day: 1, details: "Arrival and harbor cruise." },
        { day: 2, details: "Visit bustling markets and cultural sites." },
        { day: 3, details: "Enjoy a culinary tour and depart." },
      ],
      reviews: [
        { name: "Chen Li", comment: "A fascinating blend of East and West.", rating: 4.8 },
        { name: "Wai Ming", comment: "Every moment in Hong Kong was exciting!", rating: 5 },
      ],
      promotions: "Book now for a free dim sum tasting session!",
      image: "/images/D23.webp",
    },
    {
      id: 24,
      destination: "Phuket, Thailand",
      activities: ["Beach Resorts", "Island Hopping", "Thai Cuisine"],
      description: "Relax on the beautiful beaches of Phuket and explore its vibrant culture.",
      price: 1800,
      itinerary: [
        { day: 1, details: "Arrival and check-in at a beach resort." },
        { day: 2, details: "Island hopping tour with snorkeling." },
        { day: 3, details: "Thai cooking class and departure." },
      ],
      reviews: [
        { name: "Somsak Chai", comment: "Phuket is a tropical dream come true.", rating: 4.7 },
        { name: "Anong Phan", comment: "The food and beaches were exceptional!", rating: 4.8 },
      ],
      promotions: "Book now and get a free Thai massage session!",
      image: "/images/D24.webp",
    },
    {
      id: 25,
      destination: "Venice, Italy",
      activities: ["Gondola Rides", "Historic Architecture", "Culinary Tours"],
      description: "Experience the romance of Venice on its iconic waterways.",
      price: 2100,
      itinerary: [
        { day: 1, details: "Arrival and gondola ride through the canals." },
        { day: 2, details: "Historic tour and culinary experience." },
        { day: 3, details: "Explore local markets and depart." },
      ],
      reviews: [
        { name: "Marco Rossi", comment: "Venice is as romantic as it gets!", rating: 4.8 },
        { name: "Giulia Bianchi", comment: "A timeless journey through enchanting streets.", rating: 5 },
      ],
      promotions: "Limited time offer: free gondola ride included!",
      image: "/images/D25.webp",
    },
    {
      id: 26,
      destination: "Amsterdam, Netherlands",
      activities: ["Canal Cruises", "Museum Tours", "Cycling Tours"],
      description: "Discover Amsterdam's picturesque canals and vibrant art scene.",
      price: 2000,
      itinerary: [
        { day: 1, details: "Arrival and canal cruise." },
        { day: 2, details: "Visit museums and enjoy a cycling tour." },
        { day: 3, details: "Explore the local neighborhoods and depart." },
      ],
      reviews: [
        { name: "Sven de Vries", comment: "Amsterdam charmed me with its canals.", rating: 4.7 },
        { name: "Anna Jansen", comment: "A delightful blend of history and modernity.", rating: 4.8 },
      ],
      promotions: "Book now and receive a free bicycle rental!",
      image: "/images/D26.webp",
    },
    {
      id: 27,
      destination: "Prague, Czech Republic",
      activities: ["Historic Castles", "City Walks", "Beer Tastings"],
      description: "Explore the fairytale charm and rich history of Prague.",
      price: 1900,
      itinerary: [
        { day: 1, details: "Arrival and guided city tour." },
        { day: 2, details: "Visit castles and enjoy local beer tastings." },
        { day: 3, details: "Stroll through historic streets and depart." },
      ],
      reviews: [
        { name: "Jan Novak", comment: "Prague is truly a fairy tale come alive!", rating: 4.8 },
        { name: "Katerina Svobodova", comment: "A cultural delight with every step.", rating: 5 },
      ],
      promotions: "Early booking discount: free city tour included!",
      image: "/images/D27.webp",
    },
    {
      id: 28,
      destination: "Marrakech, Morocco",
      activities: ["Souks", "Desert Excursions", "Historical Tours"],
      description: "Immerse yourself in the vibrant colors and rich traditions of Marrakech.",
      price: 1700,
      itinerary: [
        { day: 1, details: "Arrival and guided medina tour." },
        { day: 2, details: "Explore bustling souks and local crafts." },
        { day: 3, details: "Desert excursion and departure." },
      ],
      reviews: [
        { name: "Youssef Benali", comment: "Marrakech is a sensory overload—in the best way!", rating: 4.7 },
        { name: "Fatima Zahra", comment: "A truly immersive cultural experience.", rating: 4.8 },
      ],
      promotions: "Book now and enjoy a free traditional Moroccan dinner!",
      image: "/images/D28.webp",
    },
    {
      id: 29,
      destination: "Vienna, Austria",
      activities: ["Classical Concerts", "Historical Palaces", "Coffee House Tours"],
      description: "Experience the elegant charm and musical heritage of Vienna.",
      price: 2100,
      itinerary: [
        { day: 1, details: "Arrival and city tour with historic insights." },
        { day: 2, details: "Visit palaces and attend a classical concert." },
        { day: 3, details: "Enjoy a coffee house tour and depart." },
      ],
      reviews: [
        { name: "Lukas Schmidt", comment: "Vienna exudes culture and elegance.", rating: 4.8 },
        { name: "Anna Müller", comment: "A symphony of art, history, and flavor.", rating: 5 },
      ],
      promotions: "Limited time offer: free concert tickets included!",
      image: "/images/D29.webp",
    },
    {
      id: 30,
      destination: "Kyoto, Japan",
      activities: ["Temple Visits", "Tea Ceremonies", "Traditional Gardens"],
      description: "Discover the serene beauty and rich traditions of Kyoto.",
      price: 2200,
      itinerary: [
        { day: 1, details: "Arrival and guided tour of ancient temples." },
        { day: 2, details: "Participate in a traditional tea ceremony and garden walk." },
        { day: 3, details: "Explore local crafts and depart." },
      ],
      reviews: [
        { name: "Sakura Yamada", comment: "Kyoto is a journey into timeless tradition.", rating: 4.9 },
        { name: "Kenji Suzuki", comment: "An immersive cultural and spiritual experience.", rating: 5 },
      ],
      promotions: "Book now and receive a complimentary tea ceremony experience!",
      image: "/images/D30.webp",
    },
  // Add other packages here...
];

export default packagesData;