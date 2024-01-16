const { pool } = require("./connect");
const TABLE_NAME = "favorite_cities";

const getFavoriteCities = async (userId) => {
  const [rows] = await pool.query(
    `SELECT * FROM ${TABLE_NAME} WHERE user_id = ?`,
    [userId]
  );
  return rows;
};

const isFavoriteCity = async (userId, cityKey) => {
  const [rows] = await pool.query(
    `SELECT COUNT(*) as count FROM ${TABLE_NAME} WHERE user_id = ? AND city_key = ?`,
    [userId, cityKey]
  );
  return rows[0].count > 0;
};

const addToFavorites = async (userId, cityKey) => {
  const [result] = await pool.query(
    `INSERT INTO ${TABLE_NAME} (user_id, city_key) VALUES (?, ?)`,
    [userId, cityKey]
  );
  return result;
};

const deleteFavorite = async (userId, cityKey) => {
  const [result] = await pool.query(
    `DELETE FROM ${TABLE_NAME} WHERE user_id = ? AND city_key = ?`,
    [userId, cityKey]
  );

  return result;
};

module.exports = {
  getFavoriteCities,
  isFavoriteCity,
  addToFavorites,
  deleteFavorite,
};
