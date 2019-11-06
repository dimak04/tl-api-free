module.exports = {
  development: {
    host: process.env.EXPRESS_DB_HOST,
    database: process.env.EXPRESS_DB_NAME,
    username: process.env.EXPRESS_DB_USERNAME,
    password: process.env.EXPRESS_DB_PASSWORD,
    dialect: process.env.EXPRESS_DB_DIALECT
  },
  production: {
    host: process.env.EXPRESS_DB_HOST,
    database: process.env.EXPRESS_DB_NAME,
    username: process.env.EXPRESS_DB_USERNAME,
    password: process.env.EXPRESS_DB_PASSWORD,
    dialect: process.env.EXPRESS_DB_DIALECT
  }
};
