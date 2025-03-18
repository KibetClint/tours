import React from "react";
import { Link, useParams } from "react-router-dom";
import destinationsData from "../data/destinationData.jsx";

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinationsData.find(
    (dest) => dest.id === parseInt(id)
  );

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
        <p>
          We're sorry, but we couldn't find details for the selected destination.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Basic Information */}
      <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p className="text-lg mb-4">{destination.description}</p>
      <p className="text-md text-gray-600 mb-4">
        Distance from Capital: {destination.distanceFromCapital}
      </p>

      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About {destination.name}</h2>
        <p className="mb-4">
          {destination.name} is renowned for its breathtaking landscapes and vibrant local culture. The destination offers a blend of natural beauty, historical heritage, and modern comforts.
        </p>
        <p className="mb-4">
          Travelers here can enjoy unique experiences ranging from immersive cultural tours to adventurous outdoor activities. Every visit promises a chance to create lasting memories.
        </p>
      </div>

      {/* Exclusive Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Exclusive Features</h2>
        <ul className="list-disc ml-5">
          <li className="mb-2">
            <strong>Personalized Tours:</strong> Tailor-made itineraries that cater to your interests.
          </li>
          <li className="mb-2">
            <strong>Local Culinary Experiences:</strong> Savor authentic dishes prepared by renowned local chefs.
          </li>
          <li className="mb-2">
            <strong>Exclusive Wildlife Encounters:</strong> Enjoy guided wildlife experiences in natural habitats.
          </li>
          <li className="mb-2">
            <strong>Luxury Accommodations:</strong> Stay in handpicked, exclusive lodges and resorts.
          </li>
        </ul>
      </div>

      {/* Local Attractions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Local Attractions</h2>
        <p className="mb-4">
          Beyond its natural wonders, {destination.name} boasts numerous cultural landmarks, museums, and local markets. These attractions offer visitors a deep dive into the region’s history and artistic traditions.
        </p>
        <p className="mb-4">
          Whether you're exploring bustling city streets or serene natural parks, there’s always something unique to discover.
        </p>
      </div>

      {/* Planning Your Visit */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Plan Your Visit</h2>
        <p>
          From personalized tour packages to exclusive local experiences, {destination.name} is the perfect destination for those seeking both adventure and relaxation. Book your trip today and prepare to embark on an unforgettable journey!
        </p>
      </div>
      <div className="mt-8 text-white px-4 py-2 rounded-md transition block text-center w-64">
        <Link
          to="/book"
          className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-blue-600 transition block text-center">
          Book Your Trip Now
        </Link>
      </div>
    </div>
  );
};

export default DestinationDetails;
