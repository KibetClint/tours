import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const ClientPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "buildPackages"));
        const fetchedPackages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPackages(fetchedPackages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching packages: ", error);
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "buildPackages", id));
      setPackages((prevPackages) =>
        prevPackages.filter((pkg) => pkg.id !== id)
      );
      alert("Package deleted successfully.");
    } catch (error) {
      console.error("Error deleting package:", error);
      alert("Failed to delete package.");
    }
  };

  if (loading) {
    return <div className="text-center">Loading packages...</div>;
  }

  return (
    <div className="container mx-auto px-4 text-sm py-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Submitted Travel Packages
      </h1>
      {packages.length === 0 ? (
        <p className="text-center text-gray-600">No packages available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Name</th>
                <th className="px-4 py-2 border border-gray-300">Email</th>
                <th className="px-4 py-2 border border-gray-300">Destinations</th>
                <th className="px-4 py-2 border border-gray-300">Type of Trip</th>
                <th className="px-4 py-2 border border-gray-300">Duration</th>
                <th className="px-4 py-2 border border-gray-300">Budget</th>
                <th className="px-4 py-2 border border-gray-300">No. of Adults</th>
                <th className="px-4 py-2 border border-gray-300">No of Children</th>
                <th className="px-4 py-2 border border-gray-300">Arrival Date</th>
                <th className="px-4 py-2 border border-gray-300">Additional Info</th>
                <th className="px-4 py-2 border border-gray-300">Action</th>

              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, index) => (
                <tr
                  key={pkg.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="px-4 py-2 border border-gray-300">
                    {pkg.firstName} {pkg.lastName}
                  </td>
                  <td className="px-1 py-2 border border-gray-300 ">
                    {pkg.email}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {pkg.destinations?.join(", ") || "N/A"}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {pkg.typeOfTrip}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {pkg.durationOfStay}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {pkg.budget}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {pkg.numberOfAdults}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {pkg.numberOfChildren}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {pkg.arrivalDate}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {pkg.additionalInfo}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(pkg.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClientPackages;
