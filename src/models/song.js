const { Model, Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

class Song extends Model {}
Song.init(
  {
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'artist_id',
      references: {
        model: 'artists',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
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
    tableName: 'songs',
    paranoid: true,
  },
);

module.exports = Song;
