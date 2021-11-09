const repeatString = function(inputString, numRepeats) {
    if (numRepeats < 0) {
        return `ERROR`;
    }
    
    let outputString = ``; 
    for (let i = 0; i < numRepeats; i++) {
        outputString = outputString + inputString; 
    }
    
    return outputString; 
};

// Do not edit below this line
module.exports = repeatString;
