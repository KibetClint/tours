import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";


const BuildSafari = () => {
  const [formData, setFormData] = useState({
    durationOfStay: "",
    arrivalDate: "",
    typeOfTrip: "",
    destinations: [],
    budget: "",
    numberOfAdults: "",
    numberOfChildren: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    additionalInfo: "",
  });

  const destinations = [
    "Kenya",
    "Tanzania",
    "Rwanda",
    "Uganda",
    "South Africa",
    "Namibia",
    "Botswana",
    "Zambia & Zimbabwe",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      destinations: checked
        ? [...prev.destinations, value]
        : prev.destinations.filter((d) => d !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      alert("First Name, Last Name, and Email are required!");
      return;
    }

    try {
      await addDoc(collection(db, "buildPackages"), formData);
      alert("Your travel package has been saved!");
      setFormData({
        durationOfStay: "",
        arrivalDate: "",
        typeOfTrip: "",
        destinations: [],
        budget: "",
        numberOfAdults: "",
        numberOfChildren: "",
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        additionalInfo: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to save your travel package. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-2 py-4">
      <h1 className="text-3xl font-bold text-center mb-6">Build Your Travel Package</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-6 sm:px-8 pt-6 pb-8 mx-auto"
        style={{ maxWidth: "90%", width: "100%" }}
      >
        {/* Duration of Stay */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Duration of Stay
          </label>
          <select
            name="durationOfStay"
            value={formData.durationOfStay}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select an option</option>
            {[...Array(15)].map((_, i) => (
              <option key={i} value={`${i + 3} days`}>{`${i + 3} days`}</option>
            ))}
            <option value="15+ days">15+ days</option>
          </select>
        </div>

        {/* Arrival Date */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Arrival Date
          </label>
          <input
            type="date"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Type of Trip */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Type of Trip
          </label>
          <select
            name="typeOfTrip"
            value={formData.typeOfTrip}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select an option</option>
            <option value="Driving Safari">Driving Safari</option>
            <option value="Safari/Beach Combo">Safari/Beach Combo</option>
            <option value="Specialist Safari">Specialist Safari</option>
            <option value="Unsure">Unsure</option>
          </select>
        </div>

        {/* Destinations */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Where would you like to go?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {destinations.map((destination) => (
              <label key={destination} className="flex items-center">
                <input
                  type="checkbox"
                  value={destination}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {destination}
              </label>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Budget</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select an option</option>
            {Array.from({ length: 7 }, (_, i) => (
              <option key={i} value={`${i * 50}-${(i + 1) * 50}`}>${i * 50}-$${(i + 1) * 50}</option>
            ))}
            <option value="600+">$600+</option>
          </select>
        </div>

        {/* Number of Adults */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number of Adults
          </label>
          <input
            type="number"
            name="numberOfAdults"
            value={formData.numberOfAdults}
            onChange={handleChange}
            min="1"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Number of Children */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number of Children
          </label>
          <input
            type="number"
            name="numberOfChildren"
            value={formData.numberOfChildren}
            onChange={handleChange}
            min="0"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name <span className="italic text-gray-500">(required)</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Middle Name (optional)
            </label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name <span className="italic text-gray-500">(required)</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email <span className="italic text-gray-500">(required)</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Additional Information */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Anything else you think we should know at this stage
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuildSafari;
