'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TodoList.belongsTo(models.User, {
        foreignKey: 'userId', // The foreign key in the TodoLists table
        onDelete: 'CASCADE',   // Optional: action on delete
      });
    }
  }
  TodoList.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TodoList',
    paranoid: true,
    unique: true
  });
  return TodoList;
};