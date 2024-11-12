//    for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


//     Maps   => its is a object it holds only unique value.  cant repeat same value .  it is also key value pair

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const [key, value] of map) {
    // console.log(key, " = ",value)
}

