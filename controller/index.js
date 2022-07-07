const app = require("../node_modules/express")();
const pg = require("../pgsql/connent");
const orm = require("../pgsql/orm");

module.exports = {
  app,
  pg,
  orm,
};
