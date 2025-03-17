"use strict";
function showOutput(n) {
    console.log(n);
}
let n = 10;
showOutput(n);
// showing name
function showName(name) {
    console.log("hello " + name);
}
let str = "piyush";
showName(str);
//sum
function number1(n) {
    return n;
}
function number2(n) {
    return n;
}
function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(number1(10), number2(20));
//  return true if you are 18+
function areYouAdult(age) {
    if (age < 18) {
        console.log(false);
    }
    else {
        console.log(true);
    }
}
areYouAdult(19);
// create a function taking another function as input and returning the result after 1 second 
function returnNum(callback) {
    setTimeout(() => {
        callback(n); // Log 10 after 1 second
    }, 2000);
}
returnNum((n) => console.log(n));
