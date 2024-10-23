//      PRIMITIVE DATATYPE

//   7 TYPES : STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL, BigInt

// JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;   // type = object

let userEmail;     // undefined    = type = undefined


//     SYMBOL = type = symbol


const id = Symbol("1234");
const anotherId = Symbol("1234");

console.log(id === anotherId);


//    REFRENCE (NON-PRIMITIVE) DATATYPE

// ARRAY, OBJECTS, FUNCTION

// ARRAYS = [] SQUARE BRACKET = type = object

const heros = ["ironman", "spiderman", "thor", "hulk", "captain america"] 

// OBJECT = {} CURLY BRACKET = type=object

let myObj = {
    name : "shunmugesh",
    age : 23,
    dept : "computer",
}


// FUNCTION  = type= function object

  const myFunction = function(){
    console.log("My Name is Shunmugesh")
  }

  console.log(typeof heros)



//  -----------------------------------------------------------------------------------
//                                       MEMORY


// STACK (STORES PRIMITIVE DATATYPE)       &&     HEAP (STORES NON-PRIMITIVE DATATYPE)

// WHEN STACK MEMORY IS USED IT HAS THE COPY OF DECLARED VARIABLE

// HEAP HAVE THE REFRENCE OF ORIGNAL VALUE 



let myName = "shunmugesh";

let anotherName = myName;
anotherName = "nadar"

console.log(myName);
console.log(anotherName);


let userOne = {
  name : "Shunmugesh",
  age : 23,
  email : "shunmugesh@gamil.com"
}
 
let userTwo = userOne

userTwo.email="shunmugesh5252@gmaail.com"

console.log(userOne.email);
console.log(userTwo.email);

