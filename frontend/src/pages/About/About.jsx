const About = () => {
  return (
    <div style={{ padding: "60px", color: "#fff", backgroundColor: "#0f172a", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", color: "#00c2ff" }}>Hakkında</h1>
      <p style={{ marginTop: "20px", lineHeight: "1.6", fontSize: "1.1rem", color: "#cbd5e1" }}>
        Bu site, Discord botunun tanıtımı ve yönetimi için hazırlanmış bir web uygulamasıdır.
        React (Vite) ve Node.js kullanılarak geliştirilmiştir.  
        Admin panelinden bot bilgilerini, komut açıklamalarını ve istatistikleri güncelleyebilirsin.
      </p>
    </div>
  );
};

export default About;
