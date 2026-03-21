import React, { useContext, useState } from "react";
import { FaHome, FaUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(true); // for responsive toggle

  const navItems = [
    { name: "Profile", to: "/profile/view", icon: FaHome },
    { name: "Edit", to: "/profile/edit", icon: FaUser },
    { name: "Help", to: "/help", icon: FaQuestionCircle },
    { name: "Setting", to: "/profile/setting", icon: FaCog },
  ];

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await auth?.logout();
      // alert("Logout Successfully");
      navigate("/login")
    } catch (err) {
      alert("Something went wrong while logging out");
    }
  };

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-5 left-5 z-50 text-indigo-700 md:hidden"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-xl flex flex-col p-6 z-40 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >

        {/* Sidebar Nav Items */}
        <ul className="flex-1 flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 mx-1 my-1 rounded-xl text-sm font-medium transition-all duration-300
                ${isActive
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
                }`
              }
              onClick={() => setIsOpen(false)} // auto-close on mobile
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </ul>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 p-3 text-lg font-semibold text-red-600 hover:text-red-800 transition"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
