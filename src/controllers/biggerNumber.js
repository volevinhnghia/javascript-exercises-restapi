const biggerNumber = (req, res) => {
  let array = JSON.parse(req.query.num);
  let temp = array[0];//let temp = 1st element in array
  for (let index = 0; index < array.length; index++) {
    // If array[index] > temp then let temp = array[index]
    if (array[index] > temp) {
      temp = array[index];
    }
  }
  res.send(`${temp} is bigger number`);
};
module.exports = {
  biggerNumber,
};
