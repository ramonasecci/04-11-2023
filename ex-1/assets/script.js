//creazione classe User

class User {
    constructor(_firstName,_lastName,_age,_location,){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age =_age
        this.location =_location
                
    }
    compareAge(anotherUser){
        let output
        if (this.age > anotherUser.age){
            output = this.firstName +' è più vecchio di '+ anotherUser.firstName
        } else {
            output = anotherUser.firstName + ' è più vecchio di ' + this.firstName
        }
        return output
    }
}

const user1 = new User("Mario", "Rossi", 55, "Roma")
const user2 = new User("Paolo","Bianchi",32,"Bari")
const user3 = new User("Tizio","Rossi",45,"Napoli")

console.log(user1.compareAge(user3))

