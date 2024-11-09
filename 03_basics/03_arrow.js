//          THIS KEYWORD

const user = {
    username : "shunmugesh",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`); 
        console.log(this) 
    }

}

// user.welcomeMessage()
// user.username = "Devesh"
// user.welcomeMessage()

// console.log(this)  // in node environment ==> if there is no context in global object then it will show empty object {}
//  in console i.e browser there are many predifined window object it will show many object

// function chai() {
//     let username = "Shunmugesh"
//     console.log(this.username);   // this will work  only in the object  ==> undefined
//     console.log(this)    // it will give you many standard values
// }
//  chai()     

//         ARROW FUNCTION

const chai = () => {
    let username = "shunmgesh"
    console.log(this)       // IN ARROW FUNCTION WHEN YOU PRINT THIS KEYWORD IT WILL SHOW YOU EMPTY OBJECT{}
}

// chai()     


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2)  =>  num1 + num2      //  implicit return
// const addTwo = (num1, num2)  => ( num1 + num2 )

const addTwo = (num1,num2) => ({username:"Shunmugesh"})   // object return
console.log(addTwo(10,25))




//    node 03_basics/03_arrow.js 