//Objects : Literal and Constructor
let  mySym=Symbol('key')        // Symbol object should be created first

let JsUser = {
    name : "Tanuja",
    age : 21,
    email : "tanu@gmail.com",
    [mySym] : 'uniqueValue',        // Symbol should be written in square brackets
    isLoggedIn : true,
    loggedInDays : ["Monday","Wednesday","Friday"]
}

// console.log(JsUser);
// console.log(JsUser.name)
// console.log(JsUser.age);
// console.log(JsUser.email);
// console.log(JsUser.loggedInDays);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

//How to  lock the value by using freeze concept
// Object.freeze(JsUser)

//How to change particular key if freeze is used then It cannot change the key
// JsUser.name = "Salomi";
// console.log(JsUser.name)



// +++++++++++ Functions +++++++++++++++++++
 JsUser.greeting =  function(){         //function is accessed using jsUser
     console.log("Heyy!! Good Morning");    
 }
 console.log(JsUser.greeting);
 console.log(JsUser.greeting());        // Heyy!! Good Morning

//use backtick for string interpolation  

JsUser.greetingTwo = function(){        //function can be accessed using this keyword 
    console.log(`heyy,${this.name}`)
}
console.log(JsUser.greetingTwo())       //heyy,Tanuja


let greetingThree = function(){        //function can be accessed using this keyword instead of JsUser but we get name as undefined
    console.log(`heyy,${this.name}`)
}
console.log(greetingThree())            //heyy,undefined