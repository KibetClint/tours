import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

// Updated featured destinations data using IDs
const featuredDestinations = [
  {
    id: 1,
    name: "Serengeti",
    image: "/images/D1.webp",
    alt: "Serengeti National Park",
  },
  {
    id: 2,
    name: "Maldives",
    image: "/images/D2.webp",
    alt: "Maldives Escape",
  },
  {
    id: 3,
    name: "Masai Mara",
    image: "/images/D3.jpg",
    alt: "Masai Mara",
  },
  {
    id: 4,
    name: "Bali",
    image: "/images/D4.jpg",
    alt: "Bali",
  },
];

function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="w-full h-[38vh] sm:h-[48vh] md:h-[65vh] lg:h-[72vh] xl:h-[78vh] bg-gray-200">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 8000 }}
          loop
          pagination={{ clickable: true }}
          className="h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative h-full">
              <video
                src="/clips/Mountains.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              ></video>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-6">
                <motion.h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Experience the Wild Like Never Before
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-center mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Embark on an unforgettable safari adventure tailored just for you.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Link
                    to="/packages"
                    className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition"
                  >
                    Explore Packages
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative h-full">
              <video
                src="/clips/Bay.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              ></video>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-6">
                <motion.h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Discover Serene Coastal Escapes
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-center mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Unwind at stunning beach destinations that rejuvenate your soul.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Link
                    to="/destinations"
                    className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition"
                  >
                    Discover More
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative h-full">
              <video
                src="/clips/Wheel.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              ></video>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-6">
                <motion.h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Explore Untamed Adventures
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-center mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Pick a package and let us guide you to your next big adventure.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Link
                    to="/destinations"
                    className="bg-blue-500 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Destinations For You
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Featured Destinations */}
      <motion.section
        className="py-12 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((dest) => (
              <Link
                key={dest.id}
                to={`/destinations/${dest.id}`}
                className="transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={dest.image}
                    alt={dest.alt}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                    <h3 className="text-white text-lg font-semibold">{dest.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Top Packages */}
      <motion.section
        className="py-12 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Top Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Luxury Safari", img: "/images/D1.webp", price: "$2000", link: "/packages/luxury-safari" },
              { name: "Beach Escape", img: "/images/D3.jpg", price: "$1500", link: "/packages/beach-escape" },
              { name: "Adventure Trek", img: "/images/D4.jpg", price: "$1800", link: "/packages/adventure-trek" }
            ].map((packageItem, index) => (
              <Link
                key={index}
                to={packageItem.link}
                className="block transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="relative">
                  <img src={packageItem.img} alt={packageItem.name} className="w-full h-64 object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-semibold">{packageItem.name}</h3>
                    <p className="text-white text-lg font-medium">{packageItem.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Travel With Us */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Why Travel With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/icons/experience.png"
                alt="Expert Guides Icon"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600">
                Our seasoned guides ensure you experience every adventure safely.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/icons/adventure.png"
                alt="Adventure Icon"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-bold mb-2">Adventure Awaits</h3>
              <p className="text-gray-600">
                Handpicked tours that promise unforgettable memories.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/icons/support.png"
                alt="Support Icon"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                We’re here to assist you every step of the way, day or night.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-12 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="italic text-gray-700 mb-4">
                "The safari was an unforgettable experience! Everything was so well-organized."
              </p>
              <h4 className="font-bold text-lg">- John Doe</h4>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="italic text-gray-700 mb-4">
                "Breathtaking destinations and excellent service. Highly recommend!"
              </p>
              <h4 className="font-bold text-lg">- Jane Smith</h4>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="italic text-gray-700 mb-4">
                "The trip was seamless and beyond my expectations. Kudos to the team!"
              </p>
              <h4 className="font-bold text-lg">- Michael Lee</h4>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.div
        className="bg-green-700 text-white text-center py-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/D3.jpg')" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Section */}
          <div className="p-6 border border-green-600 bg-black bg-opacity-70 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-lg mb-6">
              Contact us today and let’s plan the journey of a lifetime.
            </p>
            <Link
              to="/contact"
              className="bg-white text-green-500 px-6 py-3 rounded-lg font-bold transition hover:bg-gray-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Book a Tour Section */}
          <div className="p-6 border border-green-600 bg-black bg-opacity-70 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Know Your Destination?</h2>
            <p className="text-lg mb-6">
              Choose your tour package and let us handle the rest.
            </p>
            <Link
              to="/book"
              className="bg-white text-green-500 px-6 py-3 rounded-lg font-bold transition hover:bg-gray-200"
            >
              Book a Tour
            </Link>
          </div>

          {/* Custom Tour Section */}
          <div className="p-6 border border-green-600 bg-black bg-opacity-70 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Design Your Own Safari</h2>
            <p className="text-lg mb-6">
              Create a personalized safari experience tailored to your interests and budget.
            </p>
            <Link
              to="/build-package"
              className="bg-white text-green-500 px-6 py-3 rounded-lg font-bold transition hover:bg-gray-200"
            >
              Build a Safari
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
