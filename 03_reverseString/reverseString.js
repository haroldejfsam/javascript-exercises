const reverseString = function(word) {
    reversedWord = '';
    for (let i= word.length-1;i>=0;i--) {
        reversedWord += word.charAt(i)
    }
    return reversedWord
};

// Do not edit below this line
module.exports = reverseString;
