const sumAll = function(num1, num2) {
    // Handle unspported inupts by exiting with `ERROR`
    if (num1 < 0 || 
        num2 < 0 || 
        typeof num1 !== `number` || 
        typeof num2 !== `number`) {
            
        return `ERROR`;
    }
    
    // Round so that we are working with ints
    num1 = Math.round(num1); 
    num2 = Math.round(num2); 

    // If necessary reorder the nums so that we know num2 is larger
    if (num1 > num2) {
        let temp = num1; 
        num1 = num2; 
        num2 = temp;
    }

    // Do the sum
    let sum = 0; 
    for (let i = num1; i <= num2; i++) {
        sum += i; 
    }

    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
