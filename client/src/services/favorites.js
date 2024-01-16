import axios from "axios";
import { API_HOST } from "@/constants";
import { getUserId } from "@/utils";
const BASE_URL = `${API_HOST}/favorites`;

const getFavoriteCities = async () => {
  const userId = getUserId();
  try {
    const { data: favCities } = await axios.get(BASE_URL, {
      params: { userId },
    });
    return favCities.map(city => ({...city, temperature: `${city.temperature}°C`}));
  } catch (err) {
    console.log(err);
  }
};

const isFavoriteCity = async (cityKey) => {
  const userId = getUserId();
  try {
    const { data: isFav } = await axios.get(`${BASE_URL}/isFavorite`, {
      params: { userId, cityKey },
    });
    return isFav;
  } catch (err) {
    console.log(err);
  }
};

const addToFavorites = async (cityKey) => {
  const userId = getUserId();
  try {
    await axios.post(BASE_URL, { userId, cityKey });
  } catch (err) {
    console.log(err);
  }
};

const deleteFavorite = async (cityKey) => {
  const userId = getUserId();
  try {
    const { data } = await axios.delete(BASE_URL, {
      params: { userId, cityKey },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default {
  getFavoriteCities,
  isFavoriteCity,
  addToFavorites,
  deleteFavorite,
};
