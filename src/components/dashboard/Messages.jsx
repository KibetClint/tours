import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedMessages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Error fetching messages: ", error);
      }
    };
    loadMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "messages", id));
      setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
      alert("Message deleted successfully.");
    } catch (error) {
      console.error("Error deleting message: ", error);
      alert("Failed to delete message.");
    }
  };

  return (
    <div className="container mx-auto text-sm px-2 py-6">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr
                key={msg.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 px-4 py-2">{msg.name}</td>
                <td className="border border-gray-300 px-4 py-2">{msg.email}</td>
                <td className="border border-gray-300 px-4 py-2">{msg.phone || "N/A"}</td>
                <td className="border border-gray-300 px-4 py-2">{msg.message}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(msg.timestamp?.seconds * 1000).toLocaleString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                    onClick={() => handleDelete(msg.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Messages;
