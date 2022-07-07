function capitalize(string) {
  const titleCase = string
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  
  return titleCase;
}

function reverseString(string) {

  return string.split(' ').map(word => {
    return word.split('').reverse().join('');
  }).join(' ')
}

function calculator(a, b) {
  const add = () =>  a + b 
  const subtract = () => a-b
  const divide = () => a/b;
  const multi = () => a*b;
  return {add, subtract, divide, multi}
}

function caesarCipher(string, num) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var newalpha = "";
}

function shift(n){
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + n) % alphabet.length;
		newalpha += alphabet[offset];
	}
}

function analyzeArray(array) {
  const min = () => Math.min(...array);
  const max = () => Math.max(...array);
  const length = () => array.length;
  const average = () => array.reduce((a,b) => a + b) /array.length;

  let object = {
    average
  }
  return object
};
module.exports = {
  capitalize, 
  reverseString, 
  calculator, 
  caesarCipher,
  analyzeArray,
}