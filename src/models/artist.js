const { Model, Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

class Artist extends Model {}
Artist.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'artists',
    paranoid: true,
  },
);

module.exports = Artist;
