//  const tinderUser = new Object()     =    Singleton Object
const tinderUser = {}       //    Non Singleton Object

tinderUser.id = "123"
tinderUser.name = "Shunmugesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gaamil.com",
    fullname : {
        userfullname : {
            firstname : "Shunmugesh" ,
            lastname : "Nadar"
        }
    }
}

//   console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const user= [
    {
        id: 1,
        email: "random@gmail.com"
    },
    {
        id: 2,
        email: "random2@gmail.com"
    },
]

// console.log(user[1].email)


// console.log(Object.keys(tinderUser))     //return the values in array
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


//           OBJECT DE-STRUCTURE


const course  = {
    coursename : "Javascript",
    price : "999",
    courseInstructor : "Shunmugesh"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor : instructor} = course
console.log(instructor)

//      JSON


/*{
    "name": "Shunmugesh"
    "cousrename":"Javascript"
    "price": "free"
}*/

[
    {},
    {},
    {}
]




//     node 02_basics/04_objects.js