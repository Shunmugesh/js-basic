function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("R");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(10,25)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(15,26)
// console.log("Result: ",result)

function LoginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(LoginUserMessage("Shunmugesh")) 
// console.log(LoginUserMessage())     // IF VALUE ISNT PASSED THEN IT SHOWS UNDEFINED



function calculateCartprice(...num1){
    return num1
}

// console.log(calculateCartprice(200,500,730));      // cart addition rest operator

const user = {
    username : "Shunmugesh",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

// handleObject(user)


const myNewArray = [100,200,500,800]

function returnSecondvalue(getArray){
    return getArray[2]
}

console.log(returnSecondvalue(myNewArray));

//      node 03_basics/01_functions.js