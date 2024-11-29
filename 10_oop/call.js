function SetUsername(username){
    // complex Db calls
    this.username = username
    console.log("Called");
 }


 function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
 }

 const shunmugesh =  new createUser("shunmugesh", "nadar@h.com", "123")
 console.log(shunmugesh);
 