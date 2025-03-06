import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    if (!formData.name || !formData.email || !formData.message) {
      setError("Name, Email, and Message fields are required.");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: Timestamp.now(),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Error submitting message: ", err);
      setError("An error occurred while sending your message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[20vh] flex items-center justify-center text-black"
        style={{ backgroundImage: "url('/public/images/contact-hero.jpg')" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">We’re here to help you plan your dream vacation!</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            {submitted && (
              <p className="text-green-500 mb-4">Your message has been sent successfully!</p>
            )}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-lg font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-4">
              If you have any questions or need assistance, feel free to contact us via the methods below or use our contact form.
            </p>
            <ul>
              <li className="flex items-center mb-4">
                <FaPhone className="text-blue-500 mr-4" />
                <span>+254 707 632 591</span>
              </li>
              <li className="flex items-center mb-4">
                <FaEnvelope className="text-blue-500 mr-4" />
                <span>support@tribelesstours.com</span>
              </li>
              <li className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-500 mr-4" />
                <span>2126 Neema Avenue, Nairobi City, WL 00100</span>
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-6">Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-200 py-12 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>
        <div className="h-96">
          <LoadScript googleMapsApiKey="AIzaSyBe4A-NXOhBeRsWvo5KXHdoljldlhhwrog">
            <GoogleMap
              mapContainerStyle={{ width: "90%", height: "100%" }}
              center={{ lat: -1.3008896, lng: 36.9229824 }}
              zoom={12}
            >
              <Marker position={{ lat: -1.3008896, lng: 36.9229824 }} />
            </GoogleMap>
          </LoadScript>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
