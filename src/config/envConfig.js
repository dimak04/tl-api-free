import dotenv from "dotenv";
const type = process.env.NODE_ENV;
  dotenv.config({
    path: `.env.${type}`,
    silent: true
  });