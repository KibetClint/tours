import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaBox,
  FaCommentDots,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Bookings from "../components/dashboard/Bookings";
import Messages from "../components/dashboard/Messages";
import ClientPackages from "../components/dashboard/ClientPackages";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalPackages: 0,
    unreadMessages: 0,
  });
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  // Check user authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const [bookingsSnapshot, packagesSnapshot, messagesSnapshot] =
        await Promise.all([
          getDocs(collection(db, "bookings")),
          getDocs(collection(db, "buildPackages")),
          getDocs(collection(db, "messages")),
        ]);

      const unreadMessages = messagesSnapshot.docs.filter(
        (doc) => !doc.data().isRead
      ).length;

      setStats({
        totalBookings: bookingsSnapshot.size,
        totalPackages: packagesSnapshot.size,
        unreadMessages,
      });

      setChartData({
        labels: ["Bookings", "Packages", "Messages"],
        datasets: [
          {
            label: "Overview",
            data: [
              bookingsSnapshot.size,
              packagesSnapshot.size,
              unreadMessages,
            ],
            backgroundColor: ["#4CAF50", "#2196F3", "#FF9800"],
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Auto-refresh data every 10 seconds
  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 10000); // Refresh every 10s
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "bookings":
        return <Bookings />;
      case "packages":
        return <ClientPackages />;
      case "messages":
        return <Messages />;
      default:
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                title="Total Bookings"
                value={stats.totalBookings}
                onClick={() => setActiveSection("bookings")}
                loading={loading}
              />
              <Card
                title="Trip Packages"
                value={stats.totalPackages}
                onClick={() => setActiveSection("buildPackages")}
                loading={loading}
              />
              <Card
                title="Unread Messages"
                value={stats.unreadMessages}
                onClick={() => setActiveSection("messages")}
                loading={loading}
              />
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Statistics Overview</h2>
              {chartData.labels ? (
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: true, position: "top" },
                      title: { display: true, text: "Dashboard Statistics" },
                    },
                  }}
                />
              ) : (
                <p className="text-center text-lg text-gray-500 font-semibold animate-pulse">
                  Loading chart data...
                </p>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        } bg-white shadow-md h-full flex flex-col`}
      >
        <div className="p-5 text-2xl font-bold border-b flex justify-between items-center">
          <span>{sidebarOpen && "Admin"}</span>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars />
          </button>
        </div>
        <nav className="p-4 flex-1">
          {[
            { icon: <FaTachometerAlt />, label: "Dashboard", section: "dashboard" },
            { icon: <FaCalendarAlt />, label: "Bookings", section: "bookings" },
            { icon: <FaBox />, label: "Trip Packages", section: "packages" },
            { icon: <FaCommentDots />, label: "Messages", section: "messages" },
            { icon: <FaCog />, label: "Settings", section: "settings" },
          ].map((item) => (
            <button
              key={item.section}
              className={`flex items-center w-full p-3 mb-2 rounded transition ${
                activeSection === item.section
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection(item.section)}
            >
              {item.icon}
              {sidebarOpen && <span className="ml-3">{item.label}</span>}
            </button>
          ))}
        </nav>
        <button
          className="flex items-center w-full p-3 text-red-600 hover:bg-gray-200"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          {sidebarOpen && <span className="ml-3">Logout</span>}
        </button>
      </div>
      <div className="flex-1 p-4 sm:p-10 overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

const Card = ({ title, value, onClick, loading }) => (
  <div
    className="bg-white p-6 rounded shadow cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
    onClick={onClick}
  >
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {loading ? (
      <p className="text-center text-lg text-gray-500 font-semibold animate-pulse">
        Loading...
      </p>
    ) : (
      <p className="text-4xl font-bold">{value}</p>
    )}
  </div>
);

export default Dashboard;
