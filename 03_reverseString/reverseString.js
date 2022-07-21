const reverseString = function(string) {
    let array = [];
for (let i = 0; i <= string.length; i++) {
array[i] = string.charAt(string.length - i);
}
let reverse = array.join("");
return reverse;
};

// Do not edit below this line
module.exports = reverseString;
