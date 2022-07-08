const { app, pg, orm } = require("../index");
const request = require("superagent");
var cheerio = require("cheerio");

app.get("/his", async (req, res) => {
  const url = "https://www.chazidian.com/d";
  var items = [];
  const sres = await request.get(url);
  var $ = cheerio.load(sres.text);
  $(".histday_cont")
    .eq(0)
    .find("ul li")
    .each(function (i, elem) {
      var data = {};
      if ($(elem).is("span")) {
      }
      // let year = $(this).find("a").first().text();
      let title = $(this).find("a").text().replace("【", "").replace("】", "");
      let href = $(this).find("a").last().attr("href");
      // console.log(title);
      // console.log(href);
      data.title = title;
      data.href = href;
      // console.log(data);
      console.log("his");
      // orm.save("history_today", data);
      $(elem)
        .find("a")
        .each(function (i, e) {
          let text = $(e).text();
          let url = $(e).attr("href");
        });
    });

  res.send("123");
});

module.exports = app;
