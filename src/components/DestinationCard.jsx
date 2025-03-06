import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card border rounded-lg shadow-lg p-4">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
      <p className="text-gray-600 mb-2">{destination.description}</p>
      <p className="text-gray-500 mb-2">
        Distance: {destination.distanceFromCapital}
      </p>
      <div>
        {destination.detailsPage.startsWith("http") ? (
          <a
            href={destination.detailsPage}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            View Details
          </a>
        ) : (
          <Link
            to={destination.detailsPage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            View Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default DestinationCard;
