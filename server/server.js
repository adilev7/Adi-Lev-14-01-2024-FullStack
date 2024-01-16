const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { citiesRouter, favoritesRouter } = require("./routes");
const { generateUniqueId } = require("./utils");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173", // for vite application
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) =>
  res.send({ message: "Server Running", userId: generateUniqueId() })
);

app.use("/cities", citiesRouter);
app.use("/favorites", favoritesRouter);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
