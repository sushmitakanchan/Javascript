//comparison operator
//<,>,<=,>=,==,===,!=,!==

// const isLogged = true
// if(isLogged == true){
//     console.log("User is logged in");
// }else{
//     console.log("User hasn't logged in");
// }

// const temp = 45
// if(temp<=50){
//     console.log("Temp is less than 50");
// }else{
//     console.log("Temp is greater than 50");
// }
// console.log("Executed");

const score = 200
// if (score>100){
//     const power = "fly"
//     console.log(`User power is : ${power}`);
// }
// console.log(`User power is: ${power}`);// gives error because scope ends inside if block

//Implicit Scope
// const balance = 1000 
// if(balance >=100) console.log("test");

// //NESTED
// if(balance<200){
//     console.log("less than 200");
// }else if(balance<500){
//     console.log("less than 500");
// }else if(balance<700){
//     console.log("less than 700");
// }else{
//     console.log("Balance is more than 900");
// }

const userLoggedIn = true;
const debitCard = true;
const userLoggedInGoogle = false;
const LoggedInEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allowed to access");
}
if(userLoggedInGoogle || LoggedInEmail){
    console.log("Allowed to access");
}else{
    console.log("Not allowed");
}