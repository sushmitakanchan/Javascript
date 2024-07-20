// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log("Outerloop:", i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} =`, i*j);
        
//     }
    
// }

// let fruits = ["apple","mango","chickoo", "grapes"]
// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     if(i==5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value is ${i}`);   
// }

for (let i = 1; i <= 10; i++) {
    if(i==5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value is ${i}`);   
}