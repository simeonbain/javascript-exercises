const fibonacci = function(n) {
    n = +n; 
    if (n < 0) return `OOPS`;

    let fibI = 1; 
    let fibIMinus1 = 1; 
    for (let i = 2; i < n; i++) {
        const temp = fibI;
        fibI = fibI + fibIMinus1; 
        fibIMinus1 = temp;
    }
    return fibI; 
};

// Do not edit below this line
module.exports = fibonacci;
