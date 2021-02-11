const button = document.getElementById("calculateButton");
const value1 = document.getElementById("inputBinary");
const decimalValue = document.getElementById('decimalValue');
const errorMessage = document.getElementById('errorMessage')



button.addEventListener("click", () => {   
let inputValue = document.getElementById("inputBinary").value;
// Takes input value and converts to Decimal Value and out puts to decimal

if ( inputValue === "" ) {
 errorMessage.innerHTML = "Please input a value";
} else {
    errorMessage.innerHTML = "";
    
    let integerOutput = 0;
    const stringArray = inputValue.split('');
    let pow = 0;
    for(let i = inputValue.length - 1; i>= 0; i--){
        if(stringArray[i] === '1'){
            integerOutput+= Math.pow(2, pow);
        }
        pow++;
    }
    document.getElementById("decimalResult").innerHTML = integerOutput.toString();
    
    
    document.getElementById("hexResult").innerHTML = integerOutput.toString(16);
    
}




});

