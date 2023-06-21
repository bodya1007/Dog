const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../db/database');

const Dog = db.define('dog', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: 'Name is required.'
      },
      len: {
        args: [4, 40],
        msg: 'Name must be between 4 and 40 characters.'
      }
    }
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tail_length: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

module.exports = Dog;
