const reverseString = (req, res) => {
  let array = req.params.string.split("");

  let i = 0;
  let n = array.length;
  
  while (i <= n / 2) {
    let temp = array[i];
    array[i] = array[n - i];
    array[n - i] = temp;
    i++;
  }
  let result = array.join("");
  res.send(result);
  //res.send("done");
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
const randomString = (req, res) => {
  let result = "";
  for (let index = 0; index < req.params.length; index++) {
    result =
      result +
      String.fromCharCode(Math.floor(Math.random() * (126 - 32 + 1) + 32));
    //Random character from 32 to 126 in ascii table
  }
  res.send(result);
};
module.exports = {
  reverseString,
  palindromeString,
  elementCount,
  randomString,
};
