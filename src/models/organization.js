"use strict";
module.exports = (sequelize, DataTypes) => {
  const organizatio = sequelize.define(
    "organization",
    {
      name: DataTypes.STRING,
      fullName: DataTypes.STRING,
      actualAddress: DataTypes.STRING,
      legalAddress: DataTypes.STRING
    },
    {}
  );
  organizatio.associate = function(models) {
    models.organization.belongsTo(models.typeOfOrganization, {
      foreignKey: "typeId"
    });
    models.organization.hasMany(models.contact);
    models.organization.hasMany(models.agreement, { foreignKey: "providerId" });
    models.organization.hasMany(models.agreement, { foreignKey: "customerId" });
    models.organization.belongsToMany(models.nomenclature, {through: "orgnoms"});
  };
  return organizatio;
};
