const express = require("./node_modules/express");
require("dotenv").config();
// var path = require("path");
const arrRoutes = require("./route");

// const his = require("./controller/history-today/index");
// const cnode = require("./controller/cnodejs/index");
// const university = require("./controller/university/index");

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.static("static"));
app.set("view engine", "ejs");

// app.use("/his", his);
// app.use("/cnode", cnode);
// app.use("/university", university);

// app.get("/", async (req, res) => {
//   const pool = pg.pool();
//   //   pool.query("SELECT NOW()", (err, res) => {
//   //     console.log(err, res);
//   //     pool.end();
//   //   });
//   // you can also use async/await
//   const result = await pool.query("SELECT * FROM test_1.test");
//   console.log(result.rows);
//   console.log(JSON.stringify(result.rows));
//   await pool.end();
//   // res.send("Hello World!" + JSON.stringify(result.rows));
//   res.render("index", { title: "首页" });
// });

for (const route of arrRoutes) {
  app.use(route.path, require(route.component));
}
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
