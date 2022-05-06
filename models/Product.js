// import important parts of sequelize library
const { Model, DataTypes, INTEGER, DECIMAL } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        validate: {
            isDecimal: true
        }
    },
    stock: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 10,
        validate: {
            isNumeric: true
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        // this might not be the correct syntax
        references: {
            model: "category",
            key: "id",
          },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
