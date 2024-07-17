let name = "Sush"
let age = 22

//console.log(name + age + "hello");
console.log(`Hello my name is ${name} and age is ${age}`);

const newName = new String ("Rash")
console.log(newName);

// console.log(newName[0])
// console.log(newName.__proto__)
// console.log(newName.length)
// console.log(newName.toUpperCase())
console.log(newName.charAt(2))
console.log(newName.indexOf('a'))

let str = "sushmita-kan-chan";
let str2 = "      sushmita    ";

//console.log(str.substring(0, 4));
//console.log(str2.slice(-6, 5));

//console.log(str2.trim());
let url = "sushmitakanchan@google.com";

// console.log(url.replace("@google", "gmail"));

// console.log(url.includes("sush"));

// Number and maths
// let score = 100;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// let num1 = 123.8904;
// console.log(num1.toPrecision(3));

// let anothernumber = 100000000;
// console.log(anothernumber.toLocaleString("en-IN"));


///MATH
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(5.2));
console.log(Math.floor(5.6));
console.log(Math.min(4, 5, 2, 1));
console.log(Math.max(5, 5, 8, 2));

console.log(Math.random()); //gives number between the range of 0 to 1
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);