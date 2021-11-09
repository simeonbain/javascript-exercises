const removeFromArray = function(inputArr, ...elementsToRemove) {
    const outputArr = []; 

    for (let i = 0; i < inputArr.length; i++) {
        if (elementsToRemove.includes(inputArr[i]) === false) {
            outputArr.push(inputArr[i]); 
        }
    }

    return outputArr; 
};

// Do not edit below this line
module.exports = removeFromArray;
