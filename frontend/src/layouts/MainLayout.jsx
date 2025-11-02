import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "#fff" }}>
      <nav
        style={{
          backgroundColor: "#1e293b",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#00c2ff" }}>Discord Bot</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Ana Sayfa</Link>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>Hakkında</Link>
        </div>
      </nav>

      <main>{children}</main>

      <footer
        style={{
          backgroundColor: "#1e293b",
          padding: "10px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <p style={{ color: "#94a3b8" }}>© 2025 Discord Bot Sitesi</p>
      </footer>
    </div>
  );
};

export default MainLayout;
