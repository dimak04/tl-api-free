'use strict';
module.exports = (sequelize, DataTypes) => {
  const phone = sequelize.define('phone', {
    number: DataTypes.STRING,
  }, {});
  phone.associate = function(models) {
    models.phone.belongsTo(models.contact, {onDelete: "cascade"});
  };
  return phone;
};