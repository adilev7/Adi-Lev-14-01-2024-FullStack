import axios from "axios";
import { API_HOST } from "@/constants";
const BASE_URL = `${API_HOST}/cities`;

const getCitiesByQuery = async (query) => {
  try {
    const { data: cities } = await axios.get(`${BASE_URL}/search`, {
      params: { q: query },
    });
    return cities;
  } catch (err) {
    console.log(err);
  }
};

const getCityWithWeather = async ({ key, name }) => {
  try {
    const { data: city } = await axios.get(`${BASE_URL}/getCurrentWeather`, {
      params: { key, name },
    });

    return {
      ...city,
      temperature: `${city.temperature}°C`,
    };
  } catch (err) {
    console.log(err);
  }
};

export default {
  getCitiesByQuery,
  getCityWithWeather,
};
