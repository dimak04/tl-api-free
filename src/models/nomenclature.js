'use strict';
module.exports = (sequelize, DataTypes) => {
  const nomenclature = sequelize.define('nomenclature', {
    name: DataTypes.STRING,
    groupId: DataTypes.INTEGER
  }, {});
  nomenclature.associate = function(models) {
    models.nomenclature.belongsTo(models.groupNomenclature, {foreignKey: "groupId"});
    models.nomenclature.belongsToMany(models.organization, {through: "orgnom"});
  };
  return nomenclature;
};