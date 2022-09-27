const removeFromArray = function(arr, ...deleteArgs) {
  return arr.filter((item) => !deleteArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;