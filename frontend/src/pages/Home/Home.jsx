import React from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa"; // İndir simgesi için

const bots = [
  { id: 1, name: "Bot 1", category: "Müzik", description: "Müzik botu" },
  { id: 2, name: "Bot 2", category: "Oyun", description: "Oyun botu" },
  { id: 3, name: "Bot 3", category: "Eğlence", description: "Eğlence botu" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: "40px", justifyContent: "center" }}>
      {bots.map((bot) => (
        <div key={bot.id} style={{ width: "250px", background: "#1e293b", color: "white", padding: "20px", borderRadius: "15px", textAlign: "center" }}>
          <h2>{bot.name}</h2>
          <p>{bot.description}</p>
          <p style={{ fontStyle: "italic", marginTop: "10px" }}>{bot.category}</p>
          <button
            onClick={() => navigate("/register")}
            style={{ marginTop: "15px", background: "#00c2ff", border: "none", padding: "10px 15px", borderRadius: "8px", cursor: "pointer" }}
          >
            <FaDownload /> İndir
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
