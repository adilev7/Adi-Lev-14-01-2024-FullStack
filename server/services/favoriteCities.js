const favoriteCitiesDB = require("../db/favoriteCities");
const citiesWeatherService = require("./citiesWeather");

const getFavoriteCities = async (userId) => {
  try {
    const favCities = await favoriteCitiesDB.getFavoriteCities(userId);
    const favCitiesWithWeather = await Promise.all(
      favCities.map(async ({ city_key }) => {
        const cityWithWeather = await citiesWeatherService.getCityWithWeather({
          key: city_key,
        });
        return cityWithWeather;
      })
    );
    return favCitiesWithWeather;
  } catch (err) {
    console.log(err);
  }
};

const isFavoriteCity = async (userId, cityKey) => {
  try {
    return await favoriteCitiesDB.isFavoriteCity(userId, cityKey);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const addToFavorites = async (userId, cityKey) => {
  try {
    return await favoriteCitiesDB.addToFavorites(userId, cityKey);
  } catch (err) {
    console.log(err);
  }
};

const deleteFavorite = async (userId, cityKey) => {
  try {
    return await favoriteCitiesDB.deleteFavorite(userId, cityKey);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getFavoriteCities,
  isFavoriteCity,
  addToFavorites,
  deleteFavorite,
};
