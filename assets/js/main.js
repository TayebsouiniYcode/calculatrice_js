let num1;
let num2;
let operateur;
let resutl;

let numberOne = document.getElementById('numberOne');
let numberTwo = document.getElementById('numberTwo');
let numberThree = document.getElementById('numberThree');
let numberFour = document.getElementById('numberFour');
let numberFive = document.getElementById('numberFive');
let numberSix = document.getElementById('numberSix');
let numberSeven = document.getElementById('numberSeven');
let numberEight = document.getElementById('numberEight');
let numberNine = document.getElementById('numberNine');
let additionOperateur = document.getElementById("addition");
let soustractionOperateur = document.getElementById('soustraction');
let multiplicationOperateur = document.getElementById('multiplication');
let divisionOperateur = document.getElementById('division');
let equals = document.getElementById('equals');

let ecran = document.getElementById('ecran');
ecran.value = "";

function addisionner(num1, num2) {
    return num1 + num2;
}

function soustraire(num1, num2) {
    return num1 - num2;
}

function multiplier(num1, num2) {
    return num1 * num2;
}

function diviser(num1, num2) {
    if (num2 == 0) {
        alert("Impossible de diviser par Zéro");
        num2 = 0;
        ecran.value = "";
    } else {
        return num1 / num2;
    }
}

function operate(num1, num2, operateur) {
    if(operateur == '+') {
        return addisionner(num1, num2);
    } else if (operateur == '-') {
        return soustraire(num1, num2);
    } else if (operateur == '*') {
        return multiplier(num1, num2);
    } else if (operateur == '/') {
        return diviser(num1, num2);
    } else {
        return false;
    }
}



numberOne.addEventListener("click", function() {
    ecran.value += 1;    
});

numberTwo.addEventListener("click", function() { ecran.value += 2;});
numberThree.addEventListener("click", function() { ecran.value += 3;});
numberFour.addEventListener("click", function() {ecran.value += 4;});
numberFive.addEventListener("click", function() {ecran.value += 5;});
numberSix.addEventListener("click", function() {ecran.value += 6;});
numberSeven.addEventListener("click", function() {ecran.value += 7;});
numberEight.addEventListener("click", function() {ecran.value += 8;});
numberNine.addEventListener("click", function() {ecran.value += 9;});
numberZero.addEventListener("click", function() {ecran.value += 0;});

let clearBtn = document.getElementById('clear');

function clearEcran() {
    ecran.value = "";
    num1 = undefined;
    num2 = undefined;
}

clearBtn.addEventListener('click', function() {
    clearEcran();
});



additionOperateur.addEventListener("click", function() {
    if(num2 != undefined){
        num1 = result;
        operateur = "+";
        ecran.value = "";
    } else {
        num1 = parseFloat(ecran.value);
        operateur = '+';
        ecran.value = "";
    }

});

soustractionOperateur.addEventListener("click", function() {
    if(num2 != undefined){
        num1 = result;
        operateur = "-";
        ecran.value = "";
    } else {
        num1 = parseFloat(ecran.value);
        operateur = '-';
        ecran.value = "";
    }   
});

multiplicationOperateur.addEventListener("click", function() {
    if(num2 != undefined){
        num1 = result;
        operateur = "*";
        ecran.value = "";
    } else {
        num1 = parseFloat(ecran.value);
        operateur = '*';
        ecran.value = "";
    }
});

divisionOperateur.addEventListener("click", function() {
    if(num2 != undefined){
        num1 = result;
        operateur = "/";
        ecran.value = "";
    } else {
        num1 = parseFloat(ecran.value);
        operateur = '/';
        ecran.value = "";
    }
    // if(num1 == undefined){
    //     num1 = parseFloat(ecran.value);
    //     operateur = '/';
    //     ecran.value = "";
    // }
});

equals.addEventListener("click", function() {
        num2 = parseFloat(ecran.value);
        result = operate(num1, num2, operateur);
        ecran.value = result;

        operateur = "";
});