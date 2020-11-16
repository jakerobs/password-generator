// Assignment code here

// Char Arrays
var lower = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lower.split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperArray = upper.split("");
var special = "!@#$%^&*()-=+_~?";
var specialArray = sepecial.split("");
var number = "0123456789";
var numberArray = number.split("");
// Generate password function
// char option variables
// running while loop to check if all char option variables are false. If so, select again
// while loop to check for length
// if char option is selected, array name is stored in group array
// Assign password parameters based on selections




console.log(lowerArray)





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
