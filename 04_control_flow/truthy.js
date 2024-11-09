const userEmail = []

if (userEmail){
    console.log("Got user Email")
}else{
    cosnole.log("Dont have user email")
}

// FALSY VALUE

// false, 0, -0, BigInt 0n, "", null, undefined, NAN

//    TRUTHY VALUE

// "0", 'false', " ", [], {}, function(){}, 

if(userEmail.length === 0){
    console.log("Empty array")
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log("Object is  empty")
}


//   Nullish Coalescing Operator (??): null undefined

