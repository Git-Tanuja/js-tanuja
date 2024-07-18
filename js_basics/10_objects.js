//Objects : Literal and Constructor

/**************Object Literal *****************/
// let  mySym=Symbol('key')        // Symbol object should be created first

// let JsUser = {
//     name : "Tanuja",
//     age : 21,
//     email : "tanu@gmail.com",
//     [mySym] : 'uniqueValue',        // Symbol should be written in square brackets
//     isLoggedIn : true,
//     loggedInDays : ["Monday","Wednesday","Friday"]
// }

//  console.log(JsUser);
//  console.log(JsUser.name)
//  console.log(JsUser.age);
//  console.log(JsUser.email);
// // console.log(JsUser.loggedInDays);
// // console.log(JsUser[mySym]);
// // console.log(typeof JsUser[mySym]);

// //How to  lock the value by using freeze concept
// // Object.freeze(JsUser)

// //How to change particular key if freeze is used then It cannot change the key
// // JsUser.name = "Salomi";
// // console.log(JsUser.name)



// // +++++++++++ Functions +++++++++++++++++++
//  JsUser.greeting =  function(){         //function is accessed using jsUser
//      console.log("Heyy!! Good Morning");    
//  }
//  console.log(JsUser.greeting);
//  console.log(JsUser.greeting());        // Heyy!! Good Morning

// //use backtick for string interpolation  

// JsUser.greetingTwo = function(){        //function can be accessed using this keyword 
//     console.log(`heyy,${this.name}`)
// }
// console.log(JsUser.greetingTwo())       //heyy,Tanuja


// let greetingThree = function(){        //function can be accessed using this keyword instead of JsUser but we get name as undefined
//     console.log(`heyy,${this.name}`)
// }
// console.log(greetingThree())            //heyy,undefined


/*********** Singleton Object ("Constructor") **************/
const tinderUser = new Object();        //1st way to declare object
// const tinderUser1 = {}                  // 2nd way to declare object


tinderUser.id = 1
tinderUser.name = "Sakshi"
tinderUser.email = "sakshi@gmail.com"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//How to merge object
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};

// directly merge
//const obj3 = {obj1,obj2}    //it merges to object but o/p is not expected
//console.log(obj3);          //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// Merge using assign
const obj3 = Object.assign({},obj1,obj2) 
// console.log(obj3);      // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Merge using spread
const obj4  = {...obj3,...obj2}
//console.log(obj4)

// When values come from database
 console.log(tinderUser)
 console.log(Object.keys(tinderUser))
 console.log(Object.values(tinderUser))
 console.log(Object.entries(tinderUser))

 console.log(tinderUser.hasOwnProperty('email'))
 console.log(tinderUser.hasOwnProperty('location'))
