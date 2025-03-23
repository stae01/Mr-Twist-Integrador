'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here/ relaciones mapeado
    }
  }
  Merma.init({
    name: DataTypes.STRING,
    razon: DataTypes.STRING,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Merma',
  });
  return Merma;
};