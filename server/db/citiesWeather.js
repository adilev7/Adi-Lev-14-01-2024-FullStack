const { pool } = require("./connect");
const TABLE_NAME = "cities_weather";

const getCitiesByQuery = async (query) => {
  const [rows] = await pool.query(
    `SELECT * FROM ${TABLE_NAME} WHERE name LIKE "${query}%"`
  );
  return rows;
};

const getCityByKey = async (cityKey) => {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM ${TABLE_NAME} WHERE city_key = ?`,
      [cityKey]
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
};

const createCity = async (city) => {
  const { key, name, temperature, text } = city;
  const [result] = await pool.query(
    `INSERT INTO ${TABLE_NAME} (city_key, name, temperature, weather_text) VALUES (?, ?, ?, ?)`,
    [key, name, temperature, text]
  );
  return result;
};

module.exports = {
  getCitiesByQuery,
  getCityByKey,
  createCity,
};
