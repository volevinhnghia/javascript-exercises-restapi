const reverseString = (req, res) => {
  res.send(req.params.string.split("").reverse().join(""));
  //split each character with split method to array
  // then use reverse method for reverse array and then use join method for merge all element to one string
};
module.exports = {
  reverseString,
};
