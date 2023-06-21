const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.Database,
  process.env.Name,
  process.env.Password,
  {
    host: process.env.Host,
    dialect: process.env.Dialect
  }
)

module.exports = sequelize;