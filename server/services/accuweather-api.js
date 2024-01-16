const axios = require("axios");
require("dotenv").config();

const {
  buildCurrentConditionsUrl,
  buildLocationsUrl,
} = require("../utils/accuweather-api");

// DEV
// const { dummyData } = require("../utils/accuweather-api");

const getCitiesByQuery = async (query = "") => {
  /* PROD */
  try {
    const url = buildLocationsUrl("cities/autocomplete", { q: query });
    const { data } = await axios.get(url);
    return data.map((city) => {
      const { Key, LocalizedName } = city;
      return {
        key: Key,
        name: LocalizedName,
      };
    });
  } catch (err) {
    console.log(err);
  }

  /* DEV */
  // return dummyData.locations.map((city) => {
  //   const { Key, LocalizedName } = city;
  //   return {
  //     key: Key,
  //     name: LocalizedName,
  //   };
  // });
};

const getCityWeather = async (cityKey) => {
  try {
    /* PROD */
    const url = buildCurrentConditionsUrl(cityKey);
    const { data } = await axios.get(url);
    const { WeatherText, Temperature } = data[0];

    /* DEV */
    // const { WeatherText, Temperature } = dummyData.currentConditions[0];

    return {
      text: WeatherText,
      temperature: Temperature.Metric.Value,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCityWeather,
  getCitiesByQuery,
};
