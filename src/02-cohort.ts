interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

function updateUser(updateProps: user) {
    // this is how we can use all the values to the function
}
//but when we want to use just some of them then we will do this
type UpdateUserProps = Pick<User, "name" | "age" | "password">;

function updateAnotherUser(updateProps: UpdateUserProps) {
    // this is how we can just use some of them using pick method
}

// and if we want them to be conditional if user does not update all the value just one or two then we can use partial
type newUpdateProps = Partial<UpdateUserProps>;
function updateUser2(updatedProps: newUpdateProps) {}

// readonly
interface config {
    readonly endpoint: string;
    readonly apiKey: string;
}
const Config: Readonly<config> = {
    // used for some value which we didnt want to change later

    endpoint: "adfadfa",
    apiKey: "adfadsfa",
};

// records
type UserAge = {
    [key: string]: number;
};

type UserAge2 = Record<string, number>; // this is the simpler and more readable way which we can use for defining different objects

const users: UserAge2 = {
    asdfasd: 12,
    asdfadfa: 45,
};

// maps -- cpp concept to create kinda objects
// in ts
type User6 = {
    name: string;
    email: string;
    password: string;
};

const newUser10 = new Map<string, User6>(); // this is how to define a map in ts 
newUser10.set("first", {
    name: "piyush",
    email: "piyush@123gmail.com",
    password: "23d32",
});

//exclude 
type Event1 = 'click '| 'scroll'|'mousemove';

type ExcludeEvent = Exclude<Event1 ,'scroll'> 

const handleClick = (event :ExcludeEvent):void =>{
    console.log(`handling event ${event}`);
    
}
handleClick("mousemove") // scroll can't be used here 