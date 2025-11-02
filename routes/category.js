const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// Tüm kategoriler
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// Yeni kategori ekle
router.post("/", async (req, res) => {
  try {
    const { name, slug, description } = req.body;
    const category = new Category({ name, slug, description });
    await category.save();
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: "Kategori eklenemedi" });
  }
});

module.exports = router;
