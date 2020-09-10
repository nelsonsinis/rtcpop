const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../config/database');

class Score extends Model {}
Score.init(
  {
    player: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    game: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Game',
        key: 'id',
      },
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
    tableName: 'scores',
    paranoid: true,
  },
);

module.exports = Score;
