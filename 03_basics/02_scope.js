let a  = 4
if(true){
    let a = 1
    const b= 2
    var c = 3  
    // console.log("Inner:", a) 
}

// console.log(a);
//console.log(b);
// console.log(c);


function one(){
    const username = "Sush"
    function two(){
        const website = "youtube"
        //console.log(username);
    }
    two()
    //console.log(website); gives error because scope is within function two
}
one()

if(true){
    const username = "Sush"
    if(username === "Sush"){
        const website = "youtube"
        //console.log(username+website);
    }
    //console.log(website);//scope ends within if block
}
//console.log(username);

//mini hoisting
console.log(n2(2))
function n2(num){
   return num+1
}


console.log(addthree(2))//ReferenceError: Cannot access 'addthree' before initialization
const addthree = function(num3){
    return num3+3
}
