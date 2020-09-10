const { Model, Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

class Game extends Model {}
Game.init(
  {
    startedBy: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'started_by',
    },
    finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at',
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
      field: 'deleted_at',
    },
  },
  {
    sequelize: new Sequelize(config),
    underscored: true,
    paranoid: true,
    tableName: 'games',
  },
);

module.exports = Game;
