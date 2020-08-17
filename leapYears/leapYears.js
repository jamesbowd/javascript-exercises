const leapYears = function (year) {
  if (year % 4 !== 0) {
    return false;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
};

module.exports = leapYears;
