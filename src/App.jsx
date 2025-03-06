import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Faqs from "./pages/Faqs";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails"; // Individual destination details
import PackageDetails from "./pages/PackageDetails";
import BuildSafari from "./pages/BuildSafari";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/dashboard/PrivateRoute"; // Updated to match naming convention
import Login from "./components/dashboard/Login";
import Packages from "./pages/Pakages";
import DestinationDtls from "./data/destinationsDtls";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/faq" element={<Faqs />} />

        {/* Destinations */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/destinations/:slug" element={<DestinationDtls />} />


        {/* Packages */}
        <Route path="/packages" element={<Packages/>} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/build-package" element={<BuildSafari />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    </Routes>

          <Footer />
    </Router>
  );
}

export default App;
