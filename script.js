// Assignment Code
var generateBtn = document.querySelector("#generate");

var charSet = [["Numbers","0123456789"],["Letters", "lowercase", "abcdefghijklmnopqrstuvwxyz"], ["Letters", "uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"]];

var numbers = charSet[0][1].split("");
var lowerCaseLetters = charSet[1][2].split("");
var upperCaseLetters = charSet[2][2].split("");

// Write password to the #password input
function askQuestions() {
  var question1 = prompt("How many characters do you want in your password?");

  if (question1 <= 8){
    alert("Password must be at least 8 characters.");
  } 
  
  if (question1 >= 128){
    alert("Password must be less than 128 characters.")
  };

  var password = [];
  password.length = question1; 

  for (var i = 0; i < password.length; i++){
    password[i] = Math.floor(Math.random() * 9);
  }

  var answer = password.join("");
  

  // var specialChar = confirm("Click ok to confirm including special characters.");

  // var numericChar = confirm("Click ok to confirm including numeric characters.");

  // var lowerCaseChar = confirm("Click ok to confirm including lower case characters.");

  // var upperCaseChar = confirm("Click ok to confirm including upper case characters");

  // if (specialChar && numericChar && lowerCaseChar && upperCaseChar){
  //   generatePassword();
  // }  

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = answer;

}

// Add event listener to generate button
generateBtn.addEventListener("click", askQuestions);

// generate a password 
// function generatePassword() {

//   console.log(numbers);
//   console.log(lowerCaseLetters);

  

// }
