const removeFromArray = function(array, ...args) {
for (let j = 0; j <= args.length; j++) {
    for (let i = 0; i <= array.length; i++) {
    if (array[i] == args[j] && typeof array[i] == typeof args[j]) {
        array.splice(i,1);
    }
    }
}
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
