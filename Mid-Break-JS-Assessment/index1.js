// Assignment2

/*Create an object literal named person with the following properties:
firstName (string)
lastName (string)
age (number)
isStudent (boolean) */

let person = {
    firstName : `Keisha`,
    lastName : `Anderson`,
    age : 24,
    isStudent : false,
    fullName : function(){
        let name = this.firstName + " " + this.lastName
        return(name)
    }
}
console.log(person.fullName())

