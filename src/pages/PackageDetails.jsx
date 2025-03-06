import React from "react";
import { useParams, Link } from "react-router-dom";
import packagesData from "../data/packagesData";

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = packagesData.find((p) => p.id === parseInt(id));

  if (!pkg) {
    return <p>Package not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{pkg.destination}</h1>
      <img
        src={pkg.image}
        alt={pkg.destination}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700 mb-4">{pkg.description}</p>

      {/* Itinerary Section */}
      <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        {pkg.itinerary.map((day, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">Day {day.day}: </span>
            {day.details}
          </li>
        ))}
      </ul>

      {/* Price and Promotions */}
      <p className="text-xl font-bold mb-4">Price: ${pkg.price} per person</p>
      <p className="text-sm text-gray-500 italic mb-4">{pkg.promotions}</p>

      {/* Testimonials Section */}
      <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {pkg.reviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-lg flex items-start"
          >
            {/* Replace the placeholder image with user-provided images, if available */}
            <img
              src={`/images/D5.jpg`} // Placeholder images
              alt={`Review by ${review.name}`}
              className="w-16 h-16 object-cover rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Rating: {review.rating}/5</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Button */}
      <Link
        to="/book"
        className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-blue-600 transition block text-center"
      >
        Book Your Trip Now
      </Link>
    </div>
  );
};

export default PackageDetails;
