const factorialNumber = (req, res) => {
  const number = Number(req.params.number);
  let result = 1;
  for (let index = 1; index <= number; index++) {
    result *= index;
  }
  res.send(`${number}! = ${result}`);
};
const fizzbuzz = (req, res) => {
  const number = Number(req.params.number);
  let result = "";
  if (!(number % 5)) {
    result += "fizz";
  }
  if (!(number % 3)) {
    result += "buzz";
  }

  res.send(result);
};
const numberSort = (req, res) => {
  let array = JSON.parse(req.query.num);
}
module.exports = {
  factorialNumber,
  fizzbuzz,
  numberSort
};
