const { app, pg } = require("../index");
const request = require("superagent");
var cheerio = require("cheerio");

const ch = require("../../utils/myCheerio");

app.get("/", async (req, res) => {
  const url = "cnodejs.org";

  var items = [];
  const sres = await request.get(url);

  var $element = ch(sres.text, "#topic_list .topic_title");
  console.log($element);

  var $ = cheerio.load(sres.text);
  $("#topic_list .topic_title").each(function (idx, element) {
    var $element = $(element);
    items.push({
      title: $element.attr("title"),
      href: $element.attr("href"),
    });
  });
  res.send(items);
});
module.exports = app;
