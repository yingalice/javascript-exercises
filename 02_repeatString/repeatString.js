const repeatString = function(string, num) {
  if (num < 0) return 'ERROR';
  
  let outputText = "";
  while (num > 0) {
    outputText += string;  
    num--;
  }

  return outputText;
};

// Do not edit below this line
module.exports = repeatString;
