const pg = require("./connent");

const save = (tableName, value) => {
  const pool = pg.pool();
  pool.connect((err, client, done) => {
    if (err) throw err;
    client.query(
      "INSERT INTO " + tableName + "(title_,href_) VALUES($1,$2)",
      [value.title, value.href],
      (err, res) => {
        done();
        if (err) {
          console.log(err.stack);
        } else {
          console.log(res);
        }
      }
    );
  });
};

module.exports = {
  save,
};
