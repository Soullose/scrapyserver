const express = require("./node_modules/express");
require("dotenv").config();

const pgsql = require("./pgsql/db");

const pg = require("./pgsql/connent");

const his = require("./controller/history-today/index");
const cnode = require("./controller/cnodejs/index");

const app = express();
const router = express.Router();
const port = 3000;

app.get("/", async (req, res) => {
  const pool = pg.pool();
  //   pool.query("SELECT NOW()", (err, res) => {
  //     console.log(err, res);
  //     pool.end();
  //   });
  // you can also use async/await
  const result = await pool.query("SELECT * FROM test_1.test");
  console.log(result.rows);
  console.log(JSON.stringify(result.rows));
  await pool.end();
  res.send("Hello World!" + JSON.stringify(result.rows));
});

app.use("/his", his);
app.use("/cnode", cnode);

app.use(router);
app.listen(port, () => {
  // console.log(pgsql.pgsql());
  console.log(`Example app listening on port ${port}`);
});
