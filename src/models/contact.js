'use strict';
module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('contact', {
    fio: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  contact.associate = function(models) {
    models.contact.belongsTo(models.position);
    models.contact.belongsTo(models.organization, {onDelete: "cascade"});
    models.contact.hasMany(models.phone);
  };
  return contact;
};