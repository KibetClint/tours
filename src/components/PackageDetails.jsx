import React from "react";
import { useParams } from "react-router-dom";
import packagesData from "../data/packagesData";

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = packagesData.find(p => p.id === parseInt(id));

  if (!pkg) {
    return <div className="container mx-auto px-4 py-8">Package not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{pkg.destination}</h1>
      <img
        src={pkg.image}
        alt={pkg.destination}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="mb-4">{pkg.description}</p>
      <p className="font-bold mb-2">Price: ${pkg.price} per person</p>
      <h2 className="text-xl font-semibold mb-2">Itinerary:</h2>
      <ul className="list-disc ml-5 mb-4">
        {pkg.itinerary.map((day, index) => (
          <li key={index}>
            <strong>Day {day.day}:</strong> {day.details}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Reviews:</h2>
      {pkg.reviews.map((review, index) => (
        <div key={index} className="mb-2">
          <p>
            <strong>{review.name}:</strong> {review.comment}
          </p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
      {pkg.promotions && (
        <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded">
          <p className="font-bold">Promotion:</p>
          <p>{pkg.promotions}</p>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;
