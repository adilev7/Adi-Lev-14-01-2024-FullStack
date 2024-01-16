const express = require("express");
const {
  getFavoriteCities,
  isFavoriteCity,
  addToFavorites,
  deleteFavorite,
} = require("../controllers/favoriteCities");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cities = await getFavoriteCities(req.query.userId);
    res.send(cities);
  } catch (err) {
    console.log(err);
  }
});

router.get("/isFavorite", async (req, res) => {
  const { userId, cityKey } = req.query;
  try {
    const isFavCity = await isFavoriteCity(userId, cityKey);
    res.send(isFavCity);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  const { userId, cityKey } = req.body;
  try {
    const response = await addToFavorites(userId, cityKey);
    res.send(response);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/", async (req, res) => {
  const { userId, cityKey } = req.query;
  try {
    const response = await deleteFavorite(userId, cityKey);
    res.send(response);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
