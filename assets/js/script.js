//DOM
const resultEl=document.getElementById ('result');
const lengthEl=document.getElementById ('length');
const uppercaseEl=document.getElementById ('uppercase');
const lowercaseEl=document.getElementById ('lowercase');
const numbersEl=document.getElementById ('numbers');
const symbolsEl=document.getElementById ('symbols');
const generateEl=document.getElementById ('generate');
const clipboardEl=document.getElementById ('clipboard');

const randomFunction = {
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
};

generateEl.addEventListener('click', () => {
	const length = lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

});


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

