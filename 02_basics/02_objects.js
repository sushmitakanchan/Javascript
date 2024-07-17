//singleton
//Object.create

//object literal
const sym = Symbol("mykeys")
const user = {
    name: "sushmita",
    "full_name": "sushmita kanchan",
    [sym]: "mykeys",
    age: 24,
    email: "sushmita@google.com"
}

// console.log(user.email)
// console.log(user["full_name"]);
// console.log(typeof user[sym])

user.email = "sushmita@chatgpt.com"
//Object.freeze(user)//used to lock the object
user.email = "sushmita@microsoft.com"
// console.log(user)

user.greetings = function(){
    console.log("Hello user");
}
user.greetingsTwo = function(){
    console.log(`Hello user ${this.name}`);
}
console.log(user.greetings())
console.log(user.greetingsTwo());

