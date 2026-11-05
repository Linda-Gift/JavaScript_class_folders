const jsonObjects = {
    "name" : "LindaGift",
    "profession" : "Frontend Developer",
    "experience" : "Junior",
    "location" : "Lagos"
 
}

const arrayOfObjects = [
    {
        "city" : "Lisbon",
        "country" : "Portugal",
        "code" : 234,
        "isInAfrica" : false
    },
    {
       "city" : "Accra",
        "country" : "Ghana",
        "code" : 234,
        "isInAfrica" : true 
    },
    {
        "city" : "Lagos",
        "country" : "Nigeria",
        "code" : 234,
        "isInAfrica" : true
    }

]

let result = JSON.stringify(arrayOfObjects)
// console.log(result)
let outcome = JSON.parse(result)
// console.log(outcome)

localStorage.setItem("object", (result))
let gotten = JSON.parse(localStorage.getItem("object", result))
console.log(gotten)