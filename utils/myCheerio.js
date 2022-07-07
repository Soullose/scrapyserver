var cheerio = require("cheerio");

const ch = (text, topic) => {
  var $ = cheerio.load(text);
  var $element;
  $(topic).each(function (idx, element) {
    $element = $(element);
  });
  return $element;
};

module.exports = ch;
