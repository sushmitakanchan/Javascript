//const tinderuser = new Object();//singleton object
const tinderuser = {}//non singleton object
tinderuser.id = "123"
tinderuser.name = "Sushmita"
tinderuser.isLoggedIn = false


// console.log(tinderuser)

const  regularuser = {
    email: "sushmita@google.com",
    fullname:{
        username:{
            firstname:"Sushmita",
            lastname:"Kanchan"
        }
    }
}
// console.log(regularuser.fullname.username);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
// const obj4 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2}

//console.log(obj4)

const user1 = [
{
    id:1,
    email: "sushmita"
},
{
    id:2,
    email:"rashmita"
}
]
//user[1].email
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedIn'));



const course = {
    name : "Javascript",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor
//object de-structuring
const {courseInstructor : instructor} = course
console.log(instructor)

//JSON
{
    "name" : "Sush",
    "age" : "23",
    "gender" : "Female"
}