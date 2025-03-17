"use strict";
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn");
const btn3 = document.getElementById("btn");
btn.onclick = function () {
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
