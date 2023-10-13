const sumAll = function(a, b) {
    //checks if a or b are integers
    if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    //checks if a or b or not negative numbers
    if(a < 0 || b < 0) return "ERROR";
    //switches if a is bigger than b
    if(a > b){
        const temp = a;
        a = b;
        b = temp;
    }

    //adds digits between (and including) a and b
    let sum = 0;
    for (let i = a; i <= b; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
