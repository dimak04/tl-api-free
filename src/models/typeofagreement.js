'use strict';
module.exports = (sequelize, DataTypes) => {
  const typeOfAgreement = sequelize.define('typeOfAgreement', {
    name: DataTypes.STRING
  }, {});
  typeOfAgreement.associate = function(models) {
    models.typeOfAgreement.hasMany(models.agreement, {foreignKey: "typeId"})
  };
  return typeOfAgreement;
};