'use strict';
//ask user for personal data
const firstname = prompt("Inserisci il tuo nome");
const lastname = prompt("Inserisci il tuo cognome");
const color = prompt("Inserisci il tuo colore preferito");
const number = prompt("Inserisci un numero da 0 a 100");
const secondNumber = prompt("Inserisci un altro numero da 0 a 100");
//let's divide the first number by the second
let code = Math.trunc(number / secondNumber);
//create the password
const password = firstname + lastname + color + number + code;
//show the password
console.log(password);
//show the data in the html
document.getElementById("firstname").innerHTML = firstname;
document.getElementById("lastname").innerHTML = lastname;
document.getElementById("color").innerHTML = color;
document.getElementById("number").innerHTML = number;
document.getElementById("secondNumber").innerHTML = secondNumber;
document.getElementById("code").innerHTML = code;
document.getElementById("password").innerHTML = password;