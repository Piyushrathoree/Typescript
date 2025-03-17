// dom manipulation
// --- type assertion

//below var can be htmlElement or null so we have 3 ways to solve this
// 1
const btn = document.getElementById("btn") as HTMLElement;

// 2 using null operator !
const btn2 = document.getElementById("btn")!;

// 3
const btn3 = <HTMLElement>document.getElementById("btn");

btn.onclick = function () {
    // this will be conditionally render if we does not defined the above thing then it can be possibly null too
    console.log("hello world ");
};

const form = document.querySelector("form") as HTMLFormElement;
const myInput = document.querySelector("form > input") as HTMLInputElement;

form.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const value = Number(myInput.value);

    const h2 = document.createElement("h2");
    h2.textContent = String(value * value);
    const body = document.querySelector("body")!;
    body.append(h2);
};

// ---------------------
// key

interface person {
    // name: string;
    // email: string;
    [key :string]:string
}

const myObj: person = {
    name: "piyush",
    email: "piyush@gmail.com",
};
// we can access both here but if we implemented key here like

const getEmail = (key : 'name'|'email') =>{ // we can access it like this so we can't get any altu faltu values but there is one more precise way 
    console.log(myObj[key]);
    return myObj[key]
}
getEmail("email")

const getPersonData = (key : keyof person) =>{ // it is doing the same thing as above but we will not be restricted if we didnt use proper input which is wrong but it is removing the problem that we are facing above like if there were too many attributes then we can't define it like above 
    console.log(myObj[key]);
    return myObj[key];
}
getPersonData('name')

