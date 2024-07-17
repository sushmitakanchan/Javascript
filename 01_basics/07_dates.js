let mydate = new Date()
// console.log(mydate)

// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());

//let myCreatedDate = new Date(2024, 2 , 19, 5 , 3, 2);
let myCreatedDate = new Date("05-05-2024")
//console.log(myCreatedDate.toLocaleString());

//TIME

let mytime = Date.now()
console.log(mytime);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString(`default`,{
    weekday:"long"
}))
