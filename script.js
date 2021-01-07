// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// 
  passwordText.value = password;
}

// *************function here**************
// Write a function called generatePassword which will have a series of prompts
function generatePassword() {


// GIVEN I need a new, secure password
// need a button or link to get a new password - mostly done already
// need to show the password on the page

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// nothing to do here

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// We have to ask the user for how many characters they want in the password
// We havew to check to make sure the password is between 8 and 128
// otherwise we tell the user to fix their input

var passwordLength = prompt ("Choose password length between 8 and 128 characters.");

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// confirm if they want lowercase
// confirm if they want uppercase
// confirm if they want numeric
// comfirm if they want special characters

var confirmUpper = confirm ("Include upper case?");
var confirmLower = confirm ("Include lower case?");
var confirmNumbers = confirm ("Include numbers?");
var confirmSymbols = confirm ("Include special characters?");
var characterOptions = [""];

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// we need to show an error if they gave no characters to choose from

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

// console.log (characterOptions);

// retVal = "";

// for (i=0; i <= passwordLength; i++)


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// from all the characters chosen, choose one randomly and add it to our password X number of numbers
}

// *************function ends here**********
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
