import React from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const categories = [
  { id: 1, name: "Müzik" },
  { id: 2, name: "Oyun" },
  { id: 3, name: "Eğlence" },
];

const bots = [
  { id: 1, name: "Bot 1", category: "Müzik", description: "Müzik botu" },
  { id: 2, name: "Bot 2", category: "Oyun", description: "Oyun botu" },
  { id: 3, name: "Bot 3", category: "Eğlence", description: "Eğlence botu" },
  { id: 4, name: "Bot 4", category: "Müzik", description: "Müzik botu 2" },
];

const Categories = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  // Eğer kategori seçilmişse sadece o kategoriyi göster
  const filteredBots = selectedCategory
    ? bots.filter(bot => bot.category === selectedCategory)
    : [];

  return (
    <div style={{ marginLeft: "220px", marginTop: "60px", padding: "20px", minHeight: "100vh", background: "#0f172a", color: "white" }}>
      
      {!selectedCategory && (
        <>
          <h1 style={{ textAlign: "left", marginBottom: "20px" }}>Tüm Kategoriler</h1>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                style={{
                  padding: "20px",
                  background: "#1e293b",
                  borderRadius: "10px",
                  cursor: "pointer",
                  width: "200px",
                  textAlign: "center"
                }}
              >
                {cat.name}
              </div>
            ))}
          </div>
        </>
      )}

      {selectedCategory && (
        <>
          <h1 style={{ textAlign: "left", marginBottom: "20px" }}>{selectedCategory} Kategorisi</h1>
          <button
            onClick={() => setSelectedCategory(null)}
            style={{ marginBottom: "20px", background: "#00c2ff", padding: "8px 15px", border: "none", borderRadius: "8px", cursor: "pointer" }}
          >
            Geri
          </button>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {filteredBots.map(bot => (
              <div key={bot.id} style={{
                width: "250px",
                background: "#1e293b",
                color: "white",
                padding: "20px",
                borderRadius: "15px",
                textAlign: "center"
              }}>
                <h2>{bot.name}</h2>
                <p>{bot.description}</p>
                <p style={{ fontStyle: "italic", marginTop: "10px" }}>{bot.category}</p>
                <button
                  onClick={() => navigate("/register")}
                  style={{
                    marginTop: "15px",
                    background: "#00c2ff",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    justifyContent: "center"
                  }}
                >
                  <FaDownload /> İndir
                </button>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
};

export default Categories;
