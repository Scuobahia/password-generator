// Lower Case 
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Upper Case
function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//Number
function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//Symbols
function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
console.log (getRandomSymbol());
