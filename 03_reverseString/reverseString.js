const reverseString = function(str) {
    const inputStrArr = str.split(``); 
    const outputStrArr = []; 

    for (let i = 0; i < inputStrArr.length; i++) {
        outputStrArr[inputStrArr.length - 1 - i] = inputStrArr[i]; 
    }
    
    return outputStrArr.join(``); 
};

// Do not edit below this line
module.exports = reverseString;
