import React from "react";
import { useParams } from "react-router-dom";
import destinationsData from "./destinationData";


const DestinationDtls = () => {
  const { slug } = useParams();
  // Match the `detailsPage` field with the route (e.g. "/destinations/serengeti")
  const destination = destinationsData.find(
    (d) => d.detailsPage === `/destinations/${slug}`
  );

  if (!destination) {
    return (
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold">Destination not found</h1>
        <p className="text-gray-600 mt-4">
          The destination you are looking for does not exist. Please check our
          available destinations on the <strong>Home</strong> or{" "}
          <strong>Destinations</strong> page.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{destination.name}</h1>
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-4">{destination.description}</p>

      <div className="text-lg mb-2">
        <strong>Price:</strong> ${destination.price}
      </div>
      <div className="text-lg mb-2">
        <strong>Rating:</strong> {destination.rating}/5
      </div>
      <div className="text-lg mb-2">
        <strong>Location:</strong> {destination.location}
      </div>
      <div className="text-lg mb-2">
        <strong>Distance from Capital:</strong> {destination.distanceFromCapital}
      </div>

      <div className="mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DestinationDtls;
