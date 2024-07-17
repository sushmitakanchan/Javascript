//#Primitive datatypes
//7 types: String, Number, Boolean, Null, Undefined, Symbol(to make any component unique),bigint

const id= Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);

//const bigNumber = 1237239243n



//Reference (Non-primitive datatypes)
//arrays, objects, functions

const fruits = ["apple","mango","grapes"]
let MyObj
{
    name:"sush",
    age = 22
}

const myfunction = function(){
    console.log("Hello World")
}



//******************************* 
//memory- STACK are used in primitive and heap memory is used in non primitive

//when stack memory is used we get a copy and in heap memory we get a reference so changes are made in the original

let Name = "sush"
let anothername = Name;
anothername = "Rash"

console.log(Name);//sush
console.log(anothername);//rash

let userOne = {
    email : "sush@google.com",
    age :22

}

let userTwo = userOne
userTwo.email = "rash@google.com"

console.log(userOne.email);//sush@google.com
console.log(userTwo.email);//sush@google.com


