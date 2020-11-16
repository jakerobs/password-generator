// Assignment code here

// Char Arrays
var lower = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lower.split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperArray = upper.split("");
var special = "!@#$%^&*()-=+_~?";
var specialArray = special.split("");
var number = "0123456789";
var numberArray = number.split("");



// Generate password function
function generatePassword() {
  var allCharacters = [];
  var confirmLength = window.prompt("Please chose a length of 8-128 characters: ");

  while(confirmLength < 8 || confirmLength > 128) {
    window.alert("You did not choose a password length bewtween 8-128 characters. Please try again.")
    var confirmLength = window.prompt("Please chose a length of 8-128 characters: ");
  }

  while(allCharacters.length === 0) {
    if(window.confirm("Would you like lowercase letters in your password?")) {
      Array.prototype.push.apply(allCharacters, lowerArray)
    }
  
    if(window.confirm("Would you like uppercase letters in your password?")) {
      Array.prototype.push.apply(allCharacters, upperArray)
    }
  
    if(window.confirm("Would you like special characters  in your password?")) {
      Array.prototype.push.apply(allCharacters, specialArray)
    }
  
    if(window.confirm("Would you like numbers in your password?")) {
      Array.prototype.push.apply(allCharacters, numberArray)
    }

    if(allCharacters.length === 0){
      window.alert("You need to select at least 1 type of character to generate the password.")
    }

    for (i = 0; i < confirmLength; )
  }



  
}

// char option variables


// running while loop to check if all char option variables are false. If so, select again
// while loop to check for length
// if char option is selected, array name is stored in group array
// Assign password parameters based on selections










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
