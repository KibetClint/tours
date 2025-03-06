import React, { useEffect, useState } from "react";
import { fetchTripPackages } from "../firebase";

const TripPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const loadPackages = async () => {
      const data = await fetchTripPackages();
      setPackages(data);
    };
    loadPackages();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Trip Packages</h1>
      {packages.length === 0 ? (
        <p>No trip packages available.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold">{pkg.name}</h2>
              <p>Price: {pkg.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripPackages;
