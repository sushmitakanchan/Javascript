// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

//accumulator takes first value for initialValue


const newNum = [1,2,3]
// const final = newNum.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc+currVal
// },0)
// console.log(final);
const final =  newNum.reduce((acc,currVal)=>acc+currVal,0)
//console.log(final);

const cart =[
    {
        course : "js",
        price : 2999
    },
    {
        course : "py",
        price : 4999
    },
    {
        course : "react",
        price : 7999
    },
    {
        course : "ruby",
        price : 1299
    }
]

const cartTotal = cart.reduce((acc, item)=>(acc+item.price),0)
console.log(cartTotal);
