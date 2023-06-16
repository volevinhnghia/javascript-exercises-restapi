const calcTwoNumber = (req, res) => {
  res.send((Number(req.query.numb1) + Number(req.query.numb2)).toString());
};
module.exports = {
  calcTwoNumber,
};
