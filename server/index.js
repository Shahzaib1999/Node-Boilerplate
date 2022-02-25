import express from "express";
import dbConfig from "./config/db";
import middlewaresConfig from "./config/middleware";
require('dotenv').config()

const app = express();

// database
dbConfig();

// middleware
middlewaresConfig(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
