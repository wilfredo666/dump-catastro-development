"use strict";
const express = require("express");
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const sequelize = require("./src/app/database/conexion");
const cors = require("cors");
const port = process.env.PORT;
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(express.json());

app.use("/api/poligonos", require("./src/app/router/poligonos"));
async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfuly");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  } catch (error) {
    console.log(`Error de conexion a la base de datos ${error}`);
  }
}
main();
