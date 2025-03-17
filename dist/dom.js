"use strict";
// dom manipulation
// --- type assertion
//below var can be htmlElement or null so we have 3 ways to solve this
// 1
const btn = document.getElementById("btn");
// 2 using null operator !
const btn2 = document.getElementById("btn");
// 3
const btn3 = document.getElementById("btn");
btn.onclick = function () {
    // this will be conditionally render if we does not defined the above thing then it can be possibly null too
    console.log("hello world ");
};
const form = document.querySelector("form");
const myInput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myInput.value);
    const h2 = document.createElement("h2");
    h2.textContent = String(value * value);
    const body = document.querySelector("body");
    body.append(h2);
};
const myObj = {
    name: "piyush",
    email: "piyush@gmail.com",
};
// we can access both here but if we implemented key here like
const getEmail = (key) => {
    console.log(myObj[key]);
    return myObj[key];
};
getEmail("email");
const getPersonData = (key) => {
    console.log(myObj[key]);
    return myObj[key];
};
getPersonData('name');
