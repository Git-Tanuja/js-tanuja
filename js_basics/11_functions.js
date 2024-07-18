/******************* FUNCTIONS *********************/
// Functions and parameter

// How to write a function
// function sayhi(){
//     console.log("Heyy!!!!!!")
//     console.log("T")
//     console.log("A")
//     console.log("N")
//     console.log("U")
//     console.log("J")
//     console.log("A")
// }
// sayhi();

// // How to add two numbers
// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addNumbers(4,8)


// // How to subtract two numbers by storing them and then return the value
// function subNumbers(num1,num2){
//     let result = num2-num1;
//     return result;
// }
// result = subNumbers(5,9);
// console.log("Result:",result);


// // When you loggin you will get message and if username is not defined
// function loginUserMessage(username){
//     //if(username === undefined){
//     if(!username){
//         console.log("Please enter number");
//         return ;
//     }
//     return `${username} is logged in`;
// }
// console.log(loginUserMessage("tanuja"))
// console.log(loginUserMessage())



// Rest Operator concept (...) : Multiple values in single parameter
function calculateCartPrice(...num1){
    return num1;
}
//console.log(calculateCartPrice(200,300,400,500))


/************** OBJECT IN FUNCTIONS ********************/
const user = {
    username : "Tanuja",
    email : "tanu@gmail.com"
}

function handleObject(anyObject){
   // console.log(`Username is ${anyObject.username} and email is ${anyObject.email}`);
}
//handleObject(user);
handleObject({
    username:"Sam",
    email:"sam@gmail.com"
})



/************** ARRAY IN FUNCTIONS ********************/
const myArray = [12,13,14,15,16];
function handleArray(getArray){
    return getArray[3];
}
//console.log(handleArray(myArray));

//console.log(handleArray([12,34,54,56]))


/*********************** SCOPE IN FUNCTIONS ******************************/

var a=300
let b = 500
if(true){
    var a = 10;
    let b = 20;
    const c =30
    console.log("INNER value of b:",b);
}
//console.log(a);
console.log("Outer value of b:",b);
//console.log(b);     //b is not defined because let is used for block scope and now we are accessing outside block
//console.log(c);        // c is not defined because it is  constant
 