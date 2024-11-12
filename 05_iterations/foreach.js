//  foreach

const coding =["js", "ruby", "java", "python","cpp"]

// coding.forEach( function (val) {      // callback fuction => it doest have a name => we have to pass the value 
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item,index, arr) => {
//     console.log(item, index, arr)
// } )


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

myCoding.forEach( (items) => {
    console.log(items.languageName)
} )