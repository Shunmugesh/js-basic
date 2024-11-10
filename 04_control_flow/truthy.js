const userEmail = []

// if (userEmail){
//     console.log("Got user Email")
// }else{
//     cosnole.log("Dont have user email")
// }

// FALSY VALUE

// false, 0, -0, BigInt 0n, "", null, undefined, NAN

//    TRUTHY VALUE

// "0", 'false', " ", [], {}, function(){}, 

// if(userEmail.length === 0){
//     console.log("Empty array")
// }

// const emptyobj = {}

// if (Object.keys(emptyobj).length === 0){
//     console.log("Object is  empty")
// }


//   Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null  ?? 50
// val1 = undefined ?? 60
// val1 = null ?? 10 ?? 20

// console.log(val1)


// TERNIARY OPERATOR 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80")