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