//Immediately Invoked Function Expression (IFFE)
//to remove the pollution caused due to global scope IFFE is used
(function chai(){
    //name iffe
    console.log("DB Connected");
})(); //make sure to end with semicolon while writing two or more iffe

( (name)=>{
    console.log(`Hello ${name}`);
})("sush")
