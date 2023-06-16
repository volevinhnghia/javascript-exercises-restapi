const reverseString = (req, res) => {
  res.send(req.params.string.split("").reverse().join(""));
  //split each character with split method to array
  // then use reverse method for reverse array and then use join method for merge all element to one string
};
const palindromeString = (req, res) => {
  let originalString = req.params.string;
  let reverseString = req.params.string.split("").reverse().join(""); //reverse original string
  let result = `${originalString} is palindrome string`; // result default value is palindrome string
  for (let index = 0; index <= originalString.length / 2; index++) {
    if (originalString[index] !== reverseString[index]) {
      result = `${originalString} is not palindrome string`;
      break;
    }
  }
  res.send(result);
};
const elementCount = (req, res) => {
  let newString = req.params.string;
  let checkElement = req.query.element;
  let count = 0;
  for (let index = 0; index < newString.length; index++) {
    if (newString[index] === checkElement) {
      count++;
    }
  }
  res.send(`"${checkElement}" appear in string ${count} times`);
};
module.exports = {
  reverseString,
  palindromeString,
  elementCount,
};
