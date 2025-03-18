import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function AboutUs() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Grid of Core Sections */}
      <motion.section
        className="py-12 px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Us */}
          
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold text-center mb-4">About Us</h2>
            <p className="text-base text-center">
              At Tribeless Safaris, we are more than just a travel agency—we are your partners in creating lifelong memories. Our team of travel enthusiasts, planners, and destination experts is dedicated to making your journeys seamless, enriching, and unforgettable.
            </p>
          </div>
          {/* Our Mission */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold text-center mb-4">Our Mission</h2>
            <p className="text-base text-center">
              Our mission is simple: to inspire, guide, and enable travelers to explore the world with confidence and joy.
            </p>
          </div>
          {/* Who We Are */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold text-center mb-4">Who We Are</h2>
            <p className="text-base text-center">
              Welcome to <span className="font-bold text-green-800">Tribeless Safaris</span> — your trusted partner in creating unforgettable travel experiences.
            </p>
          </div>
          {/* Why Choose Us */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold text-center mb-4">Why Choose Us</h2>
            <p className="text-base text-center">
              With years of expertise in the travel industry, we understand what makes a trip truly special. We partner with trusted local guides, handpick accommodations, and offer curated activities that capture the essence of each destination.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Meet Our Team */}
      <motion.section
        className="py-4 px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <img
              src="/images/1.jpg"
              alt="Team Member"
              className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">
              Kibet
            </h3>
            <p className="text-gray-600 text-center">Founder &amp; CEO</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <img
              src="/images/2.jpg"
              alt="Team Member"
              className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">
              Clinton
            </h3>
            <p className="text-gray-600 text-center">Founder &amp; CEO</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <img
              src="/images/3.jpg"
              alt="Team Member"
              className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">
              Langat
            </h3>
            <p className="text-gray-600 text-center">Founder &amp; CEO</p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-10 px-6 md:px-12 text-center bg-green-900 text-white text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-sm text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready to Explore the World?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Contact us today to plan your next adventure!
        </p>
        <Link to="/book">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600">
            Book a Trip
          </button>
        </Link>
      </motion.section>
    </div>
  );
}

export default AboutUs;
