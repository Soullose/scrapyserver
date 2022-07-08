const urlList = (basicUrl, number) => {
  var item = [];
  for (let index = 1; index <= number; index++) {
    let v = `/p${index}`;
    item.push(basicUrl + v);
  }
  return item;
};

module.exports = urlList;
