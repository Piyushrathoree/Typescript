// type inference
// understanding type inference
// type annotation

// type Inference -  not defining anything ts will know the type itself

// type annotation
let b: number;

function solve(a: number): void {} // type annotations in the parameters

//--------------------------------------------------------//

//Interfaces and type alliases
// -> defining Interfaces
// -> using interfaces to define object shapes
// -> extending interfaces
// -> type aliases
// -> intersection types

//using interfaces to define object shapes
interface User {
  // interfaces is used to define a structure of mostly object and reference data type
  name: string;
  email: string;
  password: string;
}
function getData(obj: User): object {
  return obj;
}

//extending interfaces - simply inherit the props of another interface and also some its own props
// basically whenever we want to define an object we can do this using interface and we should do that because its a good practice
interface User {
  name: string;
  email: string;
  password: string;
}
interface Admin extends User {
  isAdmin: boolean;
}

function getData2(obj: User): object {
  return obj;
}
function getData3(obj: Admin): object {
  return obj;
}

// two interfaces of a single name will get merged automatically
interface abcd {
  name: string;
}
interface abcd {
  email: string;
}
function user(user: abcd): void {
  console.log(user.email, user.name);
}

// -> type aliases -- defining your own types
type chacha = number; // now it will work as numbers

let a: chacha;
//usecase of type aliases
type value = string | number | null;
let a2: value = 12;

// intersection
type user = {
  name: string;
  email: string;
};

type admin = user & {
  getDetails(user: string): void;
};

// arrays
const arr: number[] | string[] = [1, 2, 3, 4, 5, 6]; // just put a dot and we can get the method which can be used on numbers array
//or we can write it like
const arr2: Array<number | string> = ["raman", "suman"]; //and similarly here we can see string method

interface obj {
  no: number;
  name: string;
  gender?: ["male" | "female"];
}

type funcType = (n: number, m: string) => void;
interface newObj extends obj {
  isEarning: boolean;
  func?: funcType; // instead of defining the whole function here we can define a type  -- now it is of type function and it only take two argumnet and return void
}

type FuncType = (n: number, m: string | number, l: boolean | number) => number;

const newFunc: FuncType = (n, m, l) => {
  if (typeof m === "number" && typeof l === "number") return n * m * l; // we can't directly do this because m and l can be other data type too
  //and if the conditions are not met we will return n which is number type because we already defined it
  return n;
};

//rest operator

type function3 = (...m: number[]) => number[]; // type aliases
const func3: function3 = (...m) => {
  return m;
};

//function with objects

interface productObj {
  name: string;
  price: number;
  readonly id: string; // this property can't be changed later because its readonly 
}

type funcProduct = (product: productObj) => void;

const getProductData:funcProduct =(product)=>{
  console.log(product);
  
}
const productOne :productObj={
  name:"macbook",
  price:99999,
  id:"abc123"
}
getProductData(productOne)
