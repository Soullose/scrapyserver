const { Pool, Client } = require("pg");
const db = require("./db");

const pool = () => {
  const pool = new Pool(db.pgsql());
  return pool;
};

const client = () => {
  const client = new Client(db.pgsql());
  return client;
};

module.exports = {
  pool,
  client,
};
