//      IMMEDIATELY INVOKED FUNCTION EXPRESSION   (IIFE)

// IT IS USED FOR GLOBAL SCOPE POLLUTION ==> GLOBAL SCOPE CAN CREATE PROBLEMS SOMETIME =>BLOCK SCOPE CAN ACCESS GLOBLE SCOPE

(function database() {                        // NAMED IIFE i.e. database
    console.log("DATABASE CONNECTED")
})();                                            // ; ALWAYS USE

( (name) => {
    console.log(`db two ${name}`)
})("Shunmugesh");






// node 03_basics/04_iife.js