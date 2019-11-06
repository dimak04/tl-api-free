'use strict';
module.exports = (sequelize, DataTypes) => {
  const typeOfDelivery = sequelize.define('typeOfDelivery', {
    name: DataTypes.STRING
  }, {});
  typeOfDelivery.associate = function(models) {
    models.typeOfDelivery.hasMany(models.agreement)
  };
  return typeOfDelivery;
};