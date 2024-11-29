// let myName = "shunmugesh     "
// let myChannel = "Chai    "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shunmugesh = function(){
    console.log("shunmugesh is here");
}

Array.prototype.heyhi = function(){
    console.log("heyhi is here");
}

// heroPower.shunmugesh()
// myHeros.shunmugesh()
// myHeros.heyhi()
// heroPower.heyhi()

//      INHERITANCE

const User ={
    name: "shunmugesh",
    email: "testing@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

//    MORDERN SYNTAX

Object.setPrototypeOf(TeacherSupport, Teacher)


let anotherUsername =  "Devesh    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Naman".trueLength()
"Chaiaurcode".trueLength()