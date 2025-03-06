import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const fetchedBookings = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBookings(fetchedBookings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings: ", error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "bookings", id));
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== id)
      );
      alert("Booking deleted successfully.");
    } catch (error) {
      console.error("Error deleting booking: ", error);
      alert("Failed to delete booking.");
    }
  };

  if (loading) {
    return <div className="text-center">Loading bookings...</div>;
  }

  return (
    <div className="container mx-auto text-sm px-2 py-4">
      <h1 className="text-2xl font-bold text-center mb-6">Bookings</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">#</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Trip Name</th>
              <th className="px-4 py-2 border border-gray-300">Booking Date</th>
              <th className="px-4 py-2 border border-gray-300">Guests</th>
              <th className="px-4 py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={booking.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {booking.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {booking.email}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {booking.destination}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {booking.date}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {booking.travelers}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(booking.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
