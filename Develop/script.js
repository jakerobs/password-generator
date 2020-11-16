// Assignment code here

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

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

  // While loop to confirm length
  while(confirmLength < 8 || confirmLength > 128) {
    window.alert("You did not choose a password length bewtween 8-128 characters. Please try again.")
    var confirmLength = window.prompt("Please chose a length of 8-128 characters: ");
  }

  // Statements to add char
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

  // While loop if none were added
  while(allCharacters.length === 0) {
    window.alert("You need to select at least 1 type of character to generate the password.")
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
  }


  var randomPassword = ""

  // For loop to generate password from built array
  for (i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + allCharacters[Math.floor(Math.random() * allCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

