const reverseString = function(str) {
    outputString = ""
    for (let i = str.length-1; i >=0; i--) {
        outputString += str[i];
    }
    return outputString;
}

module.exports = reverseString
