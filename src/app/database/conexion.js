const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:administrador@ec2-100-24-63-57.compute-1.amazonaws.com:5432/dbcatastro", {
  dialect: 'postgres'
  // anything else you want to pass
})

/*

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.HOSTDEV,
    dialect: "postgres",
  }
);
*/
module.exports = sequelize;


