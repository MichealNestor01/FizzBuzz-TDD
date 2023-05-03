function fizzbuzz(val) {
  if (isFizz(val) & isBuzz(val)) {
    return "FizzBuzz";
  }
  if (isFizz(val)) {
    return "Fizz";
  }
  if (isBuzz(val)) {
    return "Buzz";
  }
  return val;
}

function isFizz(val) {
  return !(val % 3);
}

function isBuzz(val) {
  return !(val % 5);
}
export { fizzbuzz };
