let myArr =  [1,2,3,4,5]
let myArr2 = ["apple","mango"]

let myArr3 = new Array(1,2,3,4,5,6);
//console.log(myArr[2])

//ARRAY METHODS
// myArr.push(6);
// myArr.pop();
//myArr.unshift(0)// adds the element to the start
//myArr.shift()//removes element from the start

// console.log(myArr.includes(2))
// console.log(myArr.indexOf(19))

const newArr = myArr.join()//join converts the array into string seperated by comma's
// console.log(myArr)
// console.log(newArr)

const myn1 = myArr.slice(1,3)//doesn't include the last range given
// console.log("A", myArr)
// console.log(myn1);

const myn2 = myArr.splice(1,3)//includes the last range given
// console.log("B",myArr)
// console.log(myn2);

//difference between splice and slice is splice edits the original array as per the given range

let fruits = ["apple","mango","chickoo"]
let vegs = ["tomato","potato"]
// fruits.push(vegs)
// console.log(fruits[3][1])

// console.log(fruits.concat(vegs))
// console.log(fruits[3])
 let food = [...fruits, ...vegs] ///spread operator for concat
//  console.log(food);

 let arr = [1,2,3, [4,5], 6,7,[8,9,8]]
 let newarrr = arr.flat(Infinity)
 //console.log(newarrr)

//  console.log(Array.isArray("sushmita"));
//  console.log(Array.from("sushmita"));

console.log(Array.from({name:"sushmita"}))// returns []
let score1 = 100
let score2= 300
let score3 = 200
console.log(Array.of(score1,score2, score3));