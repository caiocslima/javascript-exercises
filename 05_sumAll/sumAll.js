const sumAll = function(a, b) {
    let sum;
if (a > b) {
    sum = b;
    for (let i = b+1; i <= a; i++) {
        sum = sum + i;
    }
} else if (a < b) {
    sum = a;
    for (let i = a+1; i <= b; i++) {
        sum = sum + i;
    }
} else if (a == b) {
    sum = a + b;
} 
if (a < 0 || b < 0) {
    sum = "ERROR";
}
if (typeof a != 'number'|| typeof b != 'number'){
    sum = "ERROR";
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
