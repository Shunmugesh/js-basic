//              OBJECT LITERALS
const user ={
    username: "shunmugesh",
    loginCounnt: 8,
    signedI: true,  


    getUserdetails: function(){
        //console.log("Got user details from database")
        console.log(`Username: ${this.username}`)
    }
}

console.log(user.username)
console.log(user.getUserdetails())


//         CONSTRUCTOR FUNCTION    (new) keyword  => Constructor Function

// const PromiseOne = new Promise()

function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn

    return this
}

const userOne = new User("shunmugesh", 12, true)
const  userTwo = new User("Devesh", 10, false)
console.log(userOne);
console.log(userTwo)


