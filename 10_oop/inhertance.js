class User {
    constructor(username){
        this.username = username;   
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const name = new  Teacher("devesh", "devesh@gmail.com", "123")
name.addCourse()

const nameone = new User("Jayant")
nameone.logMe()