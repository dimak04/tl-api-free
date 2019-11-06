'use strict';
module.exports = (sequelize, DataTypes) => {
  const groupNomenclature = sequelize.define('groupNomenclature', {
    name: DataTypes.STRING
  });
  groupNomenclature.associate = function(models) {
    models.groupNomenclature.hasMany(models.nomenclature, {foreignKey: "groupId"});
  };
  return groupNomenclature;
};