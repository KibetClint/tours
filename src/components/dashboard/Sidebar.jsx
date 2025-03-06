import React from 'react';
import { FaTachometerAlt, FaCalendarAlt, FaBox, FaCommentDots, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sidebarItems = [
    { icon: <FaTachometerAlt />, label: 'Dashboard', section: 'dashboard' },
    { icon: <FaCalendarAlt />, label: 'Bookings', section: 'bookings' },
    { icon: <FaBox />, label: 'Trip Packages', section: 'client-packages' },
    { icon: <FaCommentDots />, label: 'Messages', section: 'messages' },
    { icon: <FaCog />, label: 'Settings', section: 'settings' },
  ];

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-5 text-2xl font-bold border-b">Tourism Admin</div>
      <nav className="p-4">
        {sidebarItems.map((item) => (
          <button
            key={item.section}
            className={`flex items-center w-full p-3 mb-2 rounded ${
              activeSection === item.section
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-200'
            }`}
            onClick={() => setActiveSection(item.section)}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </button>
        ))}
        <button
          className="flex items-center w-full p-3 mt-4 text-red-600 hover:bg-gray-200"
          onClick={() => console.log('Logging out')}
        >
          <FaSignOutAlt />
          <span className="ml-3">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
