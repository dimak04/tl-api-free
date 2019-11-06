"use strict";
module.exports = (sequelize, DataTypes) => {
  const agreement = sequelize.define(
    "agreement",
    {
      number: DataTypes.STRING,
      dateStart: DataTypes.STRING,
      dateEnd: DataTypes.STRING,
      delay: DataTypes.NUMBER,
    },
    {}
  );
  agreement.associate = function(models) {
    models.agreement.belongsTo(models.typeOfAgreement, {foreignKey: "typeId"});
    models.agreement.belongsTo(models.organization, {foreignKey: "providerId"});
    models.agreement.belongsTo(models.organization, {foreignKey: "customerId"});
    models.agreement.belongsTo(models.typeOfDelivery);
  };
  return agreement;
};
