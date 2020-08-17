const sumAll = function (firstInt, secondInt) {
  let total = 0;

  if (firstInt < 0 || secondInt < 0) {
    return "ERROR";
  }

  if (typeof firstInt != "number" || typeof secondInt != "number") {
    return "ERROR";
  }

  if (firstInt < secondInt) {
    for (let i = firstInt; i <= secondInt; i++) {
      total += i;
    }
    return total;
  }

  if (secondInt < firstInt) {
    for (let i = secondInt; i <= firstInt; i++) {
      total += i;
    }
    return total;
  }
};

sumAll(10, "90");

module.exports = sumAll;
