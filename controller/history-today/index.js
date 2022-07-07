const { app, pg, orm } = require("../index");
const request = require("superagent");
var cheerio = require("cheerio");

app.get("/", async (req, res) => {
  const url = "https://www.chazidian.com/d";

  var items = [];
  const sres = await request.get(url);
  // console.log(sres.text);
  var $ = cheerio.load(sres.text);
  // console.log($(".histday_cont").eq(0).find("ul li").length);
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
      console.log(title);
      console.log(href);
      data.title = title;
      data.href = href;
      console.log(data);
      orm.save("history_today", data);
      $(elem)
        .find("a")
        .each(function (i, e) {
          let text = $(e).text();
          let url = $(e).attr("href");
          // console.log(text);
          // console.log(url);
        });
    });

  res.send($("div").hasClass("histday_cont"));
});

module.exports = app;
