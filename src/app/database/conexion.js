const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres://postgres:postgres@localhost/dbcatastro", {
  dialect: 'postgres'
  // anything else you want to pass
})
/*const sequelize = new Sequelize(
  process.env.DATABASE, 
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.HOSTDEV,
    dialect: "postgres",
  }
);*/

module.exports = sequelize;
