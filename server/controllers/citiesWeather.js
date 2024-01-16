const citiesWeatherService = require("../services/citiesWeather");

const getCitiesByQuery = async (query) => {
  try {
    return await citiesWeatherService.getCitiesByQuery(query);
  } catch (err) {
    console.log(err);
  }
};

const getCityWithWeather = async (city) => {
  try {
    return await citiesWeatherService.getCityWithWeather(city);
  } catch (err) {
    console.log(err);
  }
};

const createCity = async (city) => {
  try {
    return await citiesWeatherService.createCity(city);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCitiesByQuery,
  getCityWithWeather,
  createCity,
};
