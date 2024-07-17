const name = "Tanuja"
const countRepo = 50
//console.log(name,countRepo)   //Tanuja 50

//console.log(`Hello my ${name} and my repository are ${countRepo}`); //Hello my Tanuja and my repository are 50

const gameName = new String('Salomi');
const text = "           Tanuja";
console.log(gameName)               //[String: 'Salomi']
console.log(gameName[0])            // S
console.log(gameName.__proto__)     // {}
console.log(gameName.length)        // 6
console.log(gameName.charAt(2))     // 1
console.log(gameName.charCodeAt(2)) //108  returns ASCII value
console.log(gameName.slice(1,5))    //alom (start,end)
console.log(gameName.substring(0,4))  // Salo (start,end) it cannot take -ve values else it is considered to be 0
console.log(gameName.substr(4,2))       // mi (start,length)
console.log(gameName.toUpperCase())     // SALOMI
console.log(gameName.toLowerCase())     //salomi
console.log(text.concat(" ",gameName)); //               Tanuja Salomi   
console.log(text.trim())                // Tanuja removes the spaces
console.log(text.repeat(4))             //Tanuja Tanuja Tannuja Tanuja : it repeats the text repeat(number of time repitition)
console.log(text.replace('Tanuja','Samruddhi'))     // Samruddhi : replace('old','new')

let newString = "I am excited to learn| javascipt";
console.log(newString.split("|"))                  // [ 'I am excited to learn', ' javascipt' ]



// Padding : we have to convert number to string
let text1 = "5";
console.log(text1.padStart(4,"0"))  //0005 : padStart("length","padded number")
console.log(text1.padEnd(4,"0"))    //5000 : padEnd("lenghth",padded number)