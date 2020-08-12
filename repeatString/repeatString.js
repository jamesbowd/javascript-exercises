const repeatString = function(str, num) {
    returnString = "";

    if (num < 0) {
        return "ERROR";
    }else {
        for (let i = 0; i < num; i++) {
            returnString += str;
        }
    }
    return returnString;
}

module.exports = repeatString
