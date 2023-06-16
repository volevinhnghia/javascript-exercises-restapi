const primeNumber = (req, res) => {
  let checkNumber = Number(req.params.number);
  let result = `${checkNumber} is prime`; // Set default result is prime number
  if (checkNumber === 0 || checkNumber === 1) {
    result = `${checkNumber} is not prime`; //0 and 1 is not prime
  }
  //for loop till checkNumber/2 because checkNumber modulo for number higher than checkNumber/2 always !== 0
  for (let index = 2; index <= checkNumber / 2; index++) {
    if (!(checkNumber % index)) {
      result = `${checkNumber} is not prime`; // if checkNumber % index == 0 mean not a prime number
      break;
    }
  }
  res.send(result);
};

module.exports = {
  primeNumber,
};
