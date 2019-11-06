'use strict';
module.exports = (sequelize, DataTypes) => {
  const position = sequelize.define('position', {
    name: DataTypes.STRING
  }, {});
  position.associate = function(models) {
    models.position.hasMany(models.contact);
  };
  return position;
};