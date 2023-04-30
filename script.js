const outputText = document.getElementById("outputText");
const inputElements = document.querySelectorAll(".inputElement");

let calculation = "";

const calculationTypes = ["+", "-", "*", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

document.addEventListener('keydown', function(event) {
    if(event.key == "=" || event.key == "Enter") {
        calculate();
    }

    if(event.key.toLowerCase() == "c") {
        reset();
    }

    if(event.key == "Backspace") {
        calculation = calculation.slice(0, -1);
        outputText.innerText = calculation;
    }

    if (calculationTypes.includes(event.key)) {
        addChar(" " + event.key + " ");
    }

    if (numbers.includes(event.key)) {
        addChar(event.key);
    }
}
);

function calculate() {
    if(calculation.length == 0) {
        return;
    }

    try {
        calculation = eval(calculation);
    }
     catch (error) {
        calculation = ""; 
    }

    outputText.innerText = calculation;
}

function addChar(char) {
    calculation += char;
    outputText.innerText = calculation;
}

function reset() {
    calculation = "";
    outputText.innerText = "";
}