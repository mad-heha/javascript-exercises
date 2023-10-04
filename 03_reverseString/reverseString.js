const reverseString = function(word) {
    let str = "";
    for (let i = word.length; i >= 0; i--){
        str += word.charAt(i)
    }
    return str;    
};

// Do not edit below this line
module.exports = reverseString;
