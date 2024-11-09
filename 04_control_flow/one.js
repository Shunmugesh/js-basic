//   if

// const isUserLoggedIn = true;

// if(isUserLoggedIn == true){
//     // console.log("You are logged in")
// }

// if (2 != 3){
//     // console.log("Executed")
// }

// const temperature = 41;

// if (temperature <= 50){
//     // console.log("Temperature is less than 50")
// }else {
//     // console.log("Temperature is greater than 50")
// }



// const balance = 1000

// if(balance < 500){
//     // console.log("Balance is less than 500")
// }else if(balance < 750){
//     // console.log("Balance is less than 750")
// }else if(balance < 900){
//     // console.log("Balance is less than 900")
// }else{
//     // console.log("balance is less than 1200")
// }


const userLoggedIn = true
const debitcard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true
 
if(userLoggedIn && debitcard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromEmail){
    console.log("User Logged in")
}