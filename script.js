// Assignment code here

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() )] * symbols.length;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);
const passLength = parseInt(prompt('Choose between (8-128) for the length of your password'));

for (i = 0; i <passLength; i++) {
  let randomNumber = Math.floor(Math.random() * CharacterData.length);
}

  const length = +lengthEl.value;
  const hasLower= lowercaseEl.checked;
  const hasUpper= uppercaseEl.checked;
  const hasNumber= numbercaseEl.checked;
  const hasSymbols= symbolcaseEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length
  );

