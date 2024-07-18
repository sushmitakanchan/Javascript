
function sayMyName()
{
    console.log("S");
    console.log("U");
    console.log("S");
    console.log("H");
}
//sayMyName();

function sum(a,b){
    console.log(a+b);
}
function sum(a,b){
    // let result = a+b;
    // return result

    return a + b
}
// let result = sum(1,2)
// console.log("result:", result)


function loginUsername(username = "sam"){
    if(username === undefined){
        console.log("Please enter correct name")
        return 

    }
    return `${username} just logged in`
}
console.log((loginUsername("sushmita")));

function calculateCartPrice(value1, value2, ...number) {
    return number;
  }
  console.log(calculateCartPrice(100, 200, 300, 400));
  
  const user = {
    name: "sush",
    age: "24",
  };
  
  function handleObject(anyobject) {
    console.log(`name is ${anyobject.name} and age is ${anyobject.age}`);
  }
  //handleObject(user);
  
  handleObject({
    name: "Sushmita",
    age: "25",
  });
  
  const newArr = [100, 200, 300, 400];
  
  function returnValue(getArray) {
    return getArray[2];
  }
  
  console.log(returnValue([1, 2, 3, 4]));
  