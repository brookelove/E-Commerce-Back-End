const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_tag: {
        type: DataTypes.INTEGER,
        // references back to the product id
        references: {
          model: "product",
          key: "id",
        },
    },
    tag_id: {
        type: DataTypes.INTEGER,
        // ferences back to the tag id
        references: {
          model: "tag",
          key: "id",
        },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
