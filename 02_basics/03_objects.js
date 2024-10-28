// singleton = literals seh singleton nai banta = constructor method seh banta hai
// object.create  = constructor method

//      OBJECT LITERALS

const mySym = Symbol("key1")

const JsUser = {
    name : "Shunmugesh",
    "lastname" : "Nadar",
    [mySym] : "key1",        //  important
    age : 24,
    location : "Mumbai",
    email : "shunmugesh007@gmail.com",
    isLoggesdIn : false,
    LastLoginDays : ["Monday", "Wednesday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])

// console.log(JsUser["lastname"])
// console.log(JsUser[mySym])

// JsUser.email = "sn@gmail.com"
// Object.freeze(JsUser)
// JsUser.isLoggesdIn = true

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello, How are you?");
}

JsUser.greetingTwo = function(){
    console.log(`Hi,How are you ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// node 02_basics/03_objects.js