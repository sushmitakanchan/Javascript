const user = {
    username :  "Sushmita",
    age : 23,

    welcomemsg: function(){
       // console.log(`${this.username}, welcome to the website`);
        //console.log(this);

    }
}
user.welcomemsg()
// user.username = "Sam"
// user.welcomemsg()

//console.log(this);

// function new1(){
//     let username = "Oggy"
//     console.log(this.username);
// }
// new1() results undefined because it only works inside objects and not directly under functions


//ARROW FUNCTIONS
// const chai = ()=> {
//     const username = "Sush"
//     console.log(this.username);
// }

// chai()

//explicit return
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log((addTwo(3,5)));

//implicit return
// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2)
const addTwo = (num1, num2) => ({username:"Sushmita"})
console.log((addTwo(3,5)));

//The meaning of this is pretty simple to deduce:

// If this is used inside a constructor function, and the function was invoked with the new keyword, this refers to the object that will be created. this will continue to mean the object even in public methods.
// If this is used anywhere else, including nested protected functions, it refers to the global scope (which in the case of the browser is the window object).