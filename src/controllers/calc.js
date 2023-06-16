const calcTwoNumber = (req, res) => {
  res.send((Number(req.query.numb1) + Number(req.query.numb2)).toString());
  // Change two number in query from string to number, and then convert back to string and send result 
};
module.exports = {
  calcTwoNumber,
};
