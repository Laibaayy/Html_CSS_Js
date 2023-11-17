
let uppercaseEl = document.querySelector("#Uppercase");
let passLength = document.querySelector("#password-length")
let lowercaseEl = document.querySelector("#Lowercase");
let NumberEl = document.querySelector("#number");
let SymbolEl = document.querySelector("#Symbols");
let generatePassBtn = document.querySelector(".btn");
let inputpassword = document.querySelector(".input");
let btn = document.querySelector(".bx");

const allFunction = {
    upper: generateUppercase,
    lower: generateLowercase,
    Number: generateNumber,
    Symbol: generateSymbol,

};

btn.addEventListener("click", function(){
    let password = inputpassword.value;
    if(!password) return;
    let textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("copird");
})



function generateUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function generateLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function generateNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function generateSymbol() {
    let Symbol = " @#$%^&*![]{}-+=";
    let length = Symbol.length;
    return Symbol[Math.floor(Math.random() * length)];
}

generatePassBtn.addEventListener("click", function () {
    let passwordLength = Number(passLength.value);
    let hasUpper = uppercaseEl.checked;
    let hasLower = lowercaseEl.checked;
    let hasNumber = NumberEl.checked;
    let hasSymbol = SymbolEl.checked;

    // console.log(passwordLength, hasUpper, hasLower, hasNumber, hasSymbol);
   
    inputpassword.value = generatePass(passwordLength,hasUpper,hasLower,hasNumber,hasSymbol);
    

})

function generatePass(passwordLength, upper, lower, Number, Symbol) {

    let generatedPass = "";
    let TypeCheck = upper + lower + Number + Symbol;

     let typeArr = [];
    
    if (upper) typeArr.push({ upper });
    if (lower) typeArr.push({ lower });
    if (Number) typeArr.push({ Number });
    if (Symbol) typeArr.push({ Symbol });
    // console.log(typeArr);
    if (TypeCheck === 0) {
        // return "";
           inputpassword.value = "";
    }

    for (let i = 0; i < passwordLength; i++) {
        for (let j = 0; j < typeArr.length; j++) {
            // console.log(typeArr[j]);
            let funcname =  Object.keys(typeArr[j])[0];
            // console.log(funcname);
            generatedPass += allFunction[funcname]();
            // console.log(Object.keys(typeArr[j])[0]);
          

        }
    }
    return generatedPass.slice(0, passwordLength);
    // console.log(generatedPass);
}


















