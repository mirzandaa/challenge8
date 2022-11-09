'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async addEmployee (data) {
      try {
        await this.create({
          name: data.name,
          email: data.email,
          birthdate: data.birthdate,
          mobile: data.mobile,
          address: data.address
        })
      } catch (error) {
        Promise.reject(error)
      }
    }
  }
  employee.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    mobile: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'employee',
  });
  return employee;
};