import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaList, FaUserPlus, FaSignInAlt, FaCog, FaLock, FaQuestionCircle } from "react-icons/fa";

const menuItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Categories", path: "/categories", icon: <FaList /> },
  { name: "Register", path: "/register", icon: <FaUserPlus /> },
  { name: "Login", path: "/login", icon: <FaSignInAlt /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
  { name: "Privacy", path: "/privacy", icon: <FaLock /> },
  { name: "Help Center", path: "/help", icon: <FaQuestionCircle /> },
];

const SidebarMenu = () => {
  return (
    <div style={{
      width: "220px",
      background: "#1e293b",
      color: "white",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      paddingTop: "60px", // navbar boşluğu
      display: "flex",
      flexDirection: "column",
    }}>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          style={{
            padding: "15px 20px",
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #334155"
          }}
        >
          {item.icon} {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SidebarMenu;
