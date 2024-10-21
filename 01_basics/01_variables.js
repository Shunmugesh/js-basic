const accountId = 123
let accountEmail = "shunmugeshsnadar@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "devesh@gmail.com"
accountPassword = "1562"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])