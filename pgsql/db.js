const pgsql = () => {
  const hostName = process.env.HOST;
  const userName = process.env.USER;
  const password = process.env.PASSWORD;
  const database = process.env.DB;

  const config = {
    host: hostName,
    user: userName,
    password: password,
    database: database,
    port: 5432,
    poolSize: 5,
  };
  return config;
};

module.exports = {
  pgsql,
};
