const express = require("express");
const path = require("path");
const router = express.Router();
const BotProject = require("../models/BotProject");

// Tüm projeleri getir
router.get("/", async (req, res) => {
  const projects = await BotProject.find().populate("category");
  res.json(projects);
});

// Yeni proje ekle
router.post("/", async (req, res) => {
  try {
    const { title, description, category, downloadPath } = req.body;
    const project = new BotProject({ title, description, category, downloadPath });
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: "Proje eklenemedi" });
  }
});

// Dosya indir
router.get("/download/:id", async (req, res) => {
  try {
    const project = await BotProject.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Proje bulunamadı" });
    const filePath = path.join(__dirname, "../public", project.downloadPath);
    res.download(filePath);
  } catch (err) {
    res.status(500).json({ error: "İndirme hatası" });
  }
});

module.exports = router;
