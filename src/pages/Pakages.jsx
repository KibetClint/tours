import React from "react";
import { Link } from "react-router-dom";
import packagesData from "../data/packagesData";

const Packages = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Travel Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packagesData.map((pkg) => (
          <div
            key={pkg.id}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={pkg.image}
              alt={pkg.destination}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {pkg.destination}
              </h2>
              <p className="text-gray-600 mb-2">{pkg.description}</p>
              <p className="text-gray-700 font-bold mb-2">
                Price: ${pkg.price} per person
              </p>
              <Link
                to={`/packages/${pkg.id}`}
                className="block text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
