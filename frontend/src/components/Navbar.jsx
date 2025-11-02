import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        background: "#1e293b",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo / Site Adı */}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>BotSite</div>

      {/* Menü */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/register" style={{ color: "white", textDecoration: "none" }}>
          Kayıt Ol
        </Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          İletişim
        </Link>
        <Link to="/settings" style={{ color: "white", textDecoration: "none" }}>
          Ayarlar
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
