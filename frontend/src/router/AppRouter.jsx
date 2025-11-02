import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Navbar from "../components/Navbar.jsx";
import SidebarMenu from "../components/SidebarMenu.jsx";
import Categories from "../pages/Category/Category.jsx"; // ✅ Categories import

const AppRouter = () => {
  return (
    <Router>
      <Navbar /> {/* Üst navbar */}
      <SidebarMenu /> {/* Sol sidebar */}
      <div style={{ marginLeft: "220px", marginTop: "60px", padding: "20px" }}>
        {/* Sidebar ve navbar boşluğu */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} /> {/* ✅ Categories sayfası */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <h1>Dashboard Sayfası (sadece giriş yapanlar görebilir)</h1>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
