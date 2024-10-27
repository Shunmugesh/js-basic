//    ARRAY

const myArr = [0, 1, 2, 3, 4,]
// const myHeros =  ["Spiderman", "Thor", "Hulk"]

// const myArr2 = (1, 2, 3, 4)
// console.log(myArr[0]);


//      ARRAY METHOD

// myArr.push(0)
// myArr.pop()

// myArr.unshift(6)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))


// const newArr = myArr.join()    // join convert array into string
// console.log(myArr)
// console.log(newArr)


//     SLICE   SPLICE

console.log("A ",myArr)
const myN1 = myArr.slice(1,3)      // SLICE DOESNT INCLUDE 3
console.log(myN1)

console.log("B ",myArr)

const myN2 = myArr.splice(1,3)      // SPLICE INCLUDE 3 AND CHANGES THE ORIGINAL ARRAY i.e IT REMOVES 1,2,3
console.log(myN2)

console.log("C ",myArr)


// node 02_basics/01_arrays.js
