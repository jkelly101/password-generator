// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  // User input
var passwordLength = prompt ("Choose password length between 8 and 128 characters.");

// Conditions to make sure User Input meets requested criteria
if (passwordLength < 8 | passwordLength > 128){
  alert ("Invalid Password Length. Please try again.");
  return;
}

if (isNaN(passwordLength)){
  alert ("Must enter a number. Please try again.");
  return;
}

// User Choices
var confirmUpper = confirm ("Include upper case?");
var confirmLower = confirm ("Include lower case?");
var confirmNumbers = confirm ("Include numbers?");
var confirmSymbols = confirm ("Include special characters?");
var characterOptions = [""];

if (confirmUpper) {
  characterOptions.push ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
}

if (confirmLower) {
  characterOptions.push ('a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
}

if (confirmNumbers) {
  characterOptions.push ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
}

if (confirmSymbols) {
  characterOptions.push ('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', ',', '.', '|', '~', '?');
}

if (confirmUpper === false && confirmLower === false && confirmNumbers === false && confirmSymbols === false) {
  alert ("Must select at least one type of character. Please try again.");
  return;
}

// console.log (characterOptions);

// Password Generated
var randomPassword = "";

for (i=0; i <= parseInt(passwordLength); i++){
  randomPassword += characterOptions[Math.floor(Math.random() * characterOptions.length)];         
}

// Password displayed
return randomPassword;
}

generateBtn.addEventListener("click", writePassword);
