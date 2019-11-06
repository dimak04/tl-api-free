"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const db = {};
let sequelize;

const config = {
  host: process.env.EXPRESS_DB_HOST,
  database: process.env.EXPRESS_DB_NAME,
  username: process.env.EXPRESS_DB_USERNAME,
  password: process.env.EXPRESS_DB_PASSWORD,
  dialect: process.env.EXPRESS_DB_DIALECT
};
sequelize = new Sequelize(
  process.env.EXPRESS_DB_NAME,
  process.env.EXPRESS_DB_USERNAME,
  process.env.EXPRESS_DB_PASSWORD,
  config
);

//const env = process.env.NODE_ENV || "development";
//const config = require(__dirname + "/../config/dbConfig.js")[env];

//if (config.use_env_variable) {
//  sequelize = new Sequelize(process.env[config.use_env_variable], config);
//} else {
//  sequelize = new Sequelize(
//    config.database,
//    config.username,
//    config.password,
//   config
//  );
//}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
