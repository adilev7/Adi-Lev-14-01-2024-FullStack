const favoriteCitiesService = require("../services/favoriteCities");

const getFavoriteCities = async (userId) => {
  try {
    return await favoriteCitiesService.getFavoriteCities(userId);
  } catch (err) {
    console.log(err);
  }
};

const isFavoriteCity = async (userId, cityKey) => {
  try {
    return await favoriteCitiesService.isFavoriteCity(userId, cityKey);
  } catch (err) {
    console.log(err);
  }
};

const addToFavorites = async (userId, cityKey) => {
  try {
    return await favoriteCitiesService.addToFavorites(userId, cityKey);
  } catch (err) {
    console.log(err);
  }
};

const deleteFavorite = async (userId, cityKey) => {
  try {
    return await favoriteCitiesService.deleteFavorite(userId, cityKey);
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
