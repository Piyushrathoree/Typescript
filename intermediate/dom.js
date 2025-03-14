"use strict";
// dom manipulation
//--- type assertion
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
