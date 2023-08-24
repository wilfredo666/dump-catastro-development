const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.HOSTDEV,
    dialect: "postgres",
  }
);

module.exports = sequelize;
