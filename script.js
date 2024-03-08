// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get Special Characters
// Get numbers
// Get Lower case letters
// Get uppercase letters

// Prompt to determine password length
// Prompt to confirm password options
//    - Characters
//    - Numbers
//    - Lowercase letters
//    - Uppercase letters

// Generate password
// Gather all available options from user selection
// Randomize the pool of options and select amount from length requested

// Turn to a string and send it to write password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
