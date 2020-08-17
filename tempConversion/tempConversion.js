const ftoc = function (fInt) {
  // [°C] = ([°F] − 32) × ​5⁄9
  let cInt = ((fInt - 32) * 5) / 9;
  let roundedCInt = Math.round(cInt * 10) / 10;
  return roundedCInt;
};

const ctof = function (cInt) {
  // [°F] = [°C] × ​9⁄5 + 32
  let fInt = (cInt * 9) / 5 + 32;
  let roundedFInt = Math.round(fInt * 10) / 10;
  return roundedFInt;
};

module.exports = {
  ftoc,
  ctof,
};
