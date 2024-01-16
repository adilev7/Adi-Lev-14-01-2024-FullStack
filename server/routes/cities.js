const express = require("express");
const {
  getCityWithWeather,
  getCitiesByQuery,
} = require("../controllers/citiesWeather");
const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    const city = await getCitiesByQuery(req.query.q);
    res.send(city);
  } catch (err) {
    console.log(err);
  }
});
router.get("/getCurrentWeather", async (req, res) => {
  const { key, name } = req.query;
  try {
    const cityWithWeather = await getCityWithWeather({ key, name });
    res.send(cityWithWeather);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
