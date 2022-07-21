const repeatString = function(text,num) {
if (num < 0) {
    return "ERROR";
}    
let total = '';
for (let i=1; i<= num; i++) {
    total = total + text;
}
return total;
};

// Do not edit below this line
module.exports = repeatString;
