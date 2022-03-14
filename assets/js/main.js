"use-strict";

let buttons = document.querySelectorAll(".btn");
let operation = document.getElementById("operation");
let ecran = document.getElementById("ecran");
let values = new Array();
//let smartValues = new Array();
let number = "";

buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        let content = this.getAttribute('data-value');
        if (operation.innerText == "0"){
            operation.innerText = "";
        }
        if (content == "c"){
            values.length = 0;
            operation.innerText = "0";
        } else  {
            switch (content) {
                case "+":
                case "-":
                case "/":
                case "*":
                    // values [result, "", "+"];
                    if (number != ""){
                        values.push(number);
                        number = "";
                    }
                    values.push(content);
                    operation.innerText += content;
                    // if (content == "/") { isDivised = true;}
                    break;
                case "=":
                    values.push(number);
                    number = "";
                    break;
                case "s":
                    // values[length-1] = "";
                    number = number.slice(0, -1);
                    operation.innerText = operation.innerText.slice(0, -1);
                    break;
                default:
                    if (content == "." && number.includes(".")){
                        console.log("impossible");
                    } else {
                        number += content;
                        operation.innerText += content;
                    }
            }
        }
    });
});

let egale = document.getElementById('egale');
egale.addEventListener("click", function(){
    //division par 0
    for (let i = 0; i < values.length; i++) {
        if (values[i] == "/" && values[i+1] == "0") {
            ecran.innerText = "impossible";
            return 0;
        }
    }
    if (values.length == 1) {
        ecran.innerText = values[0];
    } else {
        let result = eval(values[0] + values[1] + values[2]);
        if (values.length > 2) {
            for(let i = 3; i < values.length - 1; i+=2){
                result = eval(result + values[i] + values[i+1]);
            }
        }
        ecran.innerText = result;
        operation.innerText = result;
        values.length = 0;
        values.push(result.toString());
        number = "";
    }
});

// let numbers = new Array();
// function evalTayeb(){
//     //let numbers = values;
//     let result = eval(values[0] + values[1] + values[2]);
//     if (values.length > 2) {
//         for(let i = 3; i < values.length - 1; i+=2){
//             result = eval(result + values[i] + values[i+1]);
//         }
//     } 
//     ecran.innerText = result;
//     operation.innerText = result;
//     values.length = 0;
//     values.push(result.toString());
// }

// function strToNumbersArr(str){
//     let number = '';
//     for(let valeur of str){
//     //for (lt i = 0 ; i < str.length ; i++) {
//         switch (valeur) {
//             case "1":
//             case "2":
//             case "3":
//             case "4":
//             case "5":
//             case "6":
//             case "7":
//             case "8":
//             case "9":
//             case "0":
//             case '.':
//                 number += valeur;
//                 break;
//             case "+":
//                 numbers.push(number);
//                 numbers.push(valeur);
//                 number = '';
//                 break;
//             case "-":
//                     numbers.push(number);
//                     numbers.push(valeur);
//                     number = '';
//                     break;
//             case "*":
//                 numbers.push(number);
//                 numbers.push(valeur);
//                 number = '';
//                 break;
//             case "/":
//                 numbers.push(number);
//                 numbers.push(valeur);
//                 number = '';
//                 break;
//             case "%":
//                 numbers.push(number);
//                 numbers.push(valeur);
//                 number = '';
//                 break;
//             case "=":
//                 numbers.push(number);
//                 numbers.push(valeur);
//                 number = '';
//                 break;
//         }
//     }
//     return numbers
// }



// // let num1 = 0;
// // for (let i = 0; i < values.length; i++ ) {
// //     switch (values[i]){
// //         case '0':
// //         case '1':
// //         case '2':
// //         case '3':
// //         case '4':
// //         case '5':
// //         case '6':
// //         case '7':
// //         case '8':
// //         case '9':
// //             num1 += values[i]
// //             break; 
// //         case '':
// //             addition(num1, num2);
// //     }
// // }
// // console.log(parseFloat(num1));