const mysql = require("mysql2");
require("dotenv").config();

exports.pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    connectTimeout: 20000
  })
  .promise();
