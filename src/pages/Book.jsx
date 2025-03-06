import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import your Firestore instance

function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    travelers: 1,
    additionalServices: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      additionalServices: checked
        ? [...prevData.additionalServices, name]
        : prevData.additionalServices.filter((service) => service !== name),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save booking to Firestore
      const docRef = await addDoc(collection(db, "bookings"), formData);
      console.log("Booking added with ID: ", docRef.id);
      alert("Thank you! Your booking request has been submitted." );
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        date: "",
        travelers: 1,
        additionalServices: [],
      });
    } catch (error) {
      console.error("Error adding booking: ", error);
      alert("An error occurred while submitting your booking. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Booking Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-6">
        <h2 className="text-2xl font-semibold mb-4">Complete Your Booking</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border p-3 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-3 rounded w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="border p-3 rounded w-full"
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleInputChange}
              className="border p-3 rounded w-full"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="border p-3 rounded w-full"
              required
            />
            <select
              name="travelers"
              value={formData.travelers}
              onChange={handleInputChange}
              className="border p-3 rounded w-full"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} Traveler{(i > 0 ? "s" : "")}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Additional Services:</h3>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                name="airport_transport"
                id="airport_transport"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="airport_transport" className="ml-2">
                Airport Transportation
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                name="hotel_dropoff"
                id="hotel_dropoff"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="hotel_dropoff" className="ml-2">
                Hotel Drop-Off
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white mt-4 px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
