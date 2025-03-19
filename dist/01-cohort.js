"use strict";
function showOutput(n) {
    console.log(n);
}
let n = 10;
showOutput(n);
function showName(name) {
    console.log("hello " + name);
}
let str = "piyush";
showName(str);
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
function areYouAdult(age) {
    if (age < 18) {
        console.log(false);
    }
    else {
        console.log(true);
    }
}
areYouAdult(19);
function returnNum(callback) {
    setTimeout(() => {
        callback(n);
    }, 2000);
}
returnNum((n) => console.log(n));
const greet = (name) => console.log(`hello ${name}`);
greet("piyush");
class User {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log('hello devs');
    }
}
class employee extends User {
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hey there";
    }
}
const e = new employee('Piyush');
e.hello();
console.log(e.greet());
