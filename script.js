// Define variable for special characters, numeric characters, lowercase characters, and uppercase characters
// Check if it would be bterr to use regular expressions or CharCodes?
const specialCharacters = "@%+\\/'!#$^?:,)(}{][~`.-_";
const numericCharacters = "0123456789";
const lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
const upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function to get user inputs for password length
const getUserImputs = () => {
  // Prompt to determine password length
  let length = parseInt(prompt('How many characters would you like your password to be? (must be between 8-128 characters)'), 10);
  
  // Validation checks for password length
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number.');
    return null;
  }
  if (length > 128) {
    alert('Sorry, the length requested is too long. Please choose a length less than 128 characters.');
    return null;
  }
  if (length < 8) {
    alert('Sorry, the length requested is too short. Please choose a length more than 8 characters.');
    return null;
  }
  
  return length;
}

// Function to generate password based on user inputs
const generatePassword = (length) => {
  if (!length) return null;
  
  // Define character options
  const characters = {
    characters: specialCharacters,
    numbers: numericCharacters,
    lowercase: lowerCasedCharacters,
    uppercase: upperCasedCharacters,
  };

  // Prompt to get user options for password
  // Is there prompt options to sellect more than cancel or okay?
  // maybe change it so you can just type "1" for characters "2" for numbers... ect?
  let optionsImput = prompt("Type 'characters, numbers, lowercase or uppercase' seperated by a comma to include them in your password");
  let options = optionsImput.toLowerCase().split(', ').filter(option => option in characters);

  // Check if the options selected are valid
  if (options.length === 0) {
    alert("Options selected are not valid.");
    return null;
  }

  // Combine selected options into one set
  let characterSet = options.map(option => characters[option]).join('');
  let generatedPassword = "";
  
  // Generate password by selecting random characters from combined set
  for (let i = 0; i < length; i++) {
    generatedPassword += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  return generatedPassword;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var length = getUserImputs();
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password || "";
}

generateBtn.addEventListener("click", writePassword);
