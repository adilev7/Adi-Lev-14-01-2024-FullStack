const axios = require("axios");
require("dotenv").config();

const {
  buildCurrentConditionsUrl,
  buildLocationsUrl,
  buildCitiesArr,
  buildCityWeatherObj,
  dummyData,
} = require("../utils/accuweather-api");

const IS_DEV_MODE = process.env.NODE_ENV === "development";

const getCitiesByQuery = async (query = "") => {
  if (IS_DEV_MODE) {
    return buildCitiesArr(dummyData.locations);
  }

  try {
    const url = buildLocationsUrl("cities/autocomplete", { q: query });
    const { data } = await axios.get(url);
    return buildCitiesArr(data);
  } catch (err) {
    console.log(err);
  }
};

const getCityWeather = async (cityKey) => {
  if (IS_DEV_MODE) {
    return buildCityWeatherObj(dummyData.currentConditions[0]);
  }

  try {
    const url = buildCurrentConditionsUrl(cityKey);
    const { data } = await axios.get(url);
    return buildCityWeatherObj(data[0]);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCityWeather,
  getCitiesByQuery,
};
