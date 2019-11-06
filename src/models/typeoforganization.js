'use strict';
module.exports = (sequelize, DataTypes) => {
  const typeOfOrganization = sequelize.define('typeOfOrganization', {
    name: DataTypes.STRING
  }, {});
  typeOfOrganization.associate = function(models) {
    models.typeOfOrganization.hasMany(models.organization, {foreignKey: "typeId"})
  };
  return typeOfOrganization;
};