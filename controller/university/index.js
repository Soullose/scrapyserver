const { app, pg, orm } = require("../index");
const request = require("superagent");
var cheerio = require("cheerio");
const urlList = require("../../utils/url");

app.get("/university", (req, res) => {
  console.log("university");
  const url = "http://college.gaokao.com/schlist";
  var v = urlList(url, 107);
  console.log(v);
  res.send("1234");
});

module.exports = app;
