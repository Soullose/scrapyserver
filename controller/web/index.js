const { app, pg } = require("../index");
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
  // res.send("Hello World!" + JSON.stringify(result.rows));
  res.render("index", { title: "首页" });
});

module.exports = app;
