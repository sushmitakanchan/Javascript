//for of

let arr = [1,2,3,4,5]
for (const val of arr) {
    // console.log(`Value is ${val}`);
    
}

let greetings = "Hello World!"
for (const greet of greetings)
     {
        // console.log(`Value of greet: ${greet}`);

}

//MAP
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("FR", "France")
map.set("IN", "India")
// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

myObj={
    name : "Sush",
    age : 23
}
for (const [key,value] of myObj) {
    console.log(key, ':-', value);
}
