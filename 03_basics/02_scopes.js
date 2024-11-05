//     SCOPES   ==> BLOCK SCOPE{}  ==> can be access only inside the block
//  GLOBAL SCOPE ==>  which is outside the block scope  ==>  can be access anywhere 

//   var    -->      global scope
//   const & let --> block scope

let a = 300       // global scope

if(true){                 // block scope
    let a = 30;
    const b = 50;
    // console.log("INNER: ",a);
}

// console.log(a)



//    child function can access parent function
function one(){
    const username = "Shunmugesh"
    function two(){
        const website = "Youtube"
        console.log(username)
    }
    //console.log(website)
    // two()
    // return two
}
// one()

// let c = one()
// console.log(c())


if (true){
    const username =  "Shunmugesh"
    if(username === "Shunmugesh"){
        const website = "Youtube"
        // console.log(username + website);
    }
    //console.log(website)
    // console.log(username)
}
//console.log(username)

//        -------------INTERESTING-------

console.log(addone(6))       // fuction can be called anywhere you can declare it anywhere
function addone(num){
    return num + 1
}

console.log(addtwo())   // here we are storeing the function in a variable == we cant call it anywhere == it will give you error
const  addtwo = function(num){
    return num + 2
}









//      node 03_basics/02_scopes.js