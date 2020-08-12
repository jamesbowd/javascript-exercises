const removeFromArray = function (arr) {
  let args = Array.prototype.slice.call(arguments, 1);

  for (let i = 0; i < arr.length; i++) {
    for (item of args) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr;
};

module.exports = removeFromArray;
