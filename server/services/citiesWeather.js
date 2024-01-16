const citiesWeatherDB = require("../db/citiesWeather");
const accuweatherApiService = require("./accuweather-api");

const getCitiesByQuery = async (query) => {
  try {
    return await accuweatherApiService.getCitiesByQuery(query);
  } catch (err) {
    console.log(err);
  }
};

const getCityWithWeather = async (city) => {
  try {
    const response = await citiesWeatherDB.getCityByKey(city.key);
    const cityData = response[0];
    if (cityData) {
      const { name, temperature, city_key: key, weather_text: text } = cityData;
      return {
        key,
        name,
        temperature,
        text,
      };
    }

    const cityWeather = await accuweatherApiService.getCityWeather(city.key);
    const cityWithWeather = { ...city, ...cityWeather };

    await createCity(cityWithWeather);

    return cityWithWeather;
  } catch (err) {
    console.log(err);
  }
};

const createCity = async (city) => {
  try {
    return await citiesWeatherDB.createCity(city);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCitiesByQuery,
  getCityWithWeather,
  createCity,
};
