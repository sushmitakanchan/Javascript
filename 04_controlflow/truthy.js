const userEmail ={}
if(userEmail){
    console.log("Got email");
}else{
    console.log("No email");
}

//falsy values
//false, 0, -0, bigint 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', "", [], {}, function(){},

if(userEmail.length===0){
    console.log("Array is empty");
}

if((Object.keys(userEmail).length === 0)){
    console.log("Empty object");
}

//Nullish Coalescing Operator(??): null, undefined

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 5
// val1 = undefined ?? 10?? 5
//console.log(val1);


//Terniary Operator
//  condition ? true : false

const bobbaTeaPrice = 100
bobbaTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");