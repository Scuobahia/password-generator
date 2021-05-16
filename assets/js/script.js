
// Var
var lengthEl = document.getElementById ('length').Value;
var uppercaseEl = document.getElementById('uppercase').checked;
var lowercaseEl = document.getElementById('lowercase').checked;
var numbersEl = document.getElementById('numbers').checked;
var symbolsEl = document.getElementById('symbols').checked;

//Generate Password
function generateCode() {
//Reassigned Variables to current state
lengthEl = document.getElementById('length').value;
uppercaseEl = document.getElementById('uppercase').checked;
lowercaseEl = document.getElementById('lowercase').checked;
numbersEl = document.getElementById('numbers').checked
symbolsEl = document.getElementById('symbols').checked;
//Create a Bank to Sotre Possible Characters for Password
var bank = '';
//Add characters to the bank
if (uppercaseEl === true) {
    bank *= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
};
IF (lowercaseEl === true) {
    bank += "abcdefghojklmnopqrstuvwxyz";
};
if (numbersEl === true) {
    bank += "0123456789"
};
if (symbolsEl === true) {
    bank += "~!@#$%^&*()_+}{[]:;/.,<>?"
};
var generatedPassword = "";
for (var i = 0; i < lengthEl; i++) {
    generatedPassword += bank.charAt(Math.floor(Math.random()* bank.length ));
};
//Display the Generated Password on the Page
document.getElementById("createdPassword").textContent = generatedPassword;
};
