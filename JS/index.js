// console.log(typeof age)

// how to work with numbers arithmetic operations using numbers

/* let x = 10
let y = 5
let result = x + y
console.log(result)
let subtractValue = x - y
console.log(subtractValue)

console.log(result % subtractValue)
console.log(result / subtractValue)
console.log(result ** 10)

let cartItems = 0
cartItems++
console.log(cartItems)

let totalAmount = 2000
totalAmount /= 10000
console.log(totalAmount)

let me = 10 + 10 * (2*2)

console.log(me) 

let equalTo = 100 >= 20
console.log(equalTo)


let roundUp = Math.floor(5.6)
console.log(roundUp)

let maximum = Math.max(100, 200,500,20,60, 10)
console.log(maximum)

let age = 40
age = String(age)
console.log(typeof age)

let priceA = `200`
priceA = Number(priceA)

let priceB = 200
let total = priceA + priceB
console.log(total)

let firstItemprice = prompt("Enter firstItemprice")
firstItemprice = Number(firstItemprice)

let secondItemprice = prompt("Enter secondItemprice")
secondItemprice = Number(secondItemprice)

let total1 = firstItemprice + secondItemprice

console.log(firstItemprice)
console.log(secondItemprice)
console.log(total1)

function calculateAverage(){
    let firstNumber = prompt("Enter firstNumber")
    firstNumber = Number(firstNumber)
    
    let secondNumber = prompt("Enter secondNumber")
    secondNumber = Number(secondNumber)

    let thirdNumber = prompt("Enter thirdNumber")
    thirdNumber = Number(thirdNumber)

    let fourtNumber = prompt("Enter fourtNumber")
    fourtNumber = Number(fourtNumber)

    let income = (firstNumber + secondNumber + thirdNumber + fourtNumber) / 4

    console.log(firstNumber) 
    console.log(secondNumber)
    console.log(thirdNumber)
    console.log(firstNumber)
    console.log(income)   
}

calculateAverage()

function averageIncome(){
    let lindaIncome = 10000
    let brendanIncome = 10000
    let onayiIncome = 10000

    let totalAverage = (lindaIncome + brendanIncome + onayiIncome) / 3

    console.log(totalAverage) 
}

averageIncome()

let bankCustomer1 = {
    firstName : `LindaGift`,
    age : 24,
    country : `Nigeria`,
    city : `Lagos`,
    accountTier : 1,
    nigerian : true
}

 console.log(bankCustomer1)

 let purchaseRecords = {
    customerName : `LindaGift`,
    paymentMethod : `card`,
    numberOfitmes : 5,
    item1price: 6000,
    item2price: 10000,
    paymentsuccessful : true,
    timeShopped : `1pm`,
}

console.log(purchaseRecords)

let churchAttendance = {
    MiniterIncharge : `Rev. Gilbert`,
    sundaySchool : 500,
    teens : 65,
    women : 250,
    men: 150,
    children: 300,
    heldSundayschool : true,
    timeHeld : `8am`,
}

console.log(churchAttendance)

let kitchenContent = {
    freezer : true,
    gasCooker : true,
    industrialBlender: true,
    numberOfpots : 7,
    numOfpan: 3,
    wok : 1,
    spoon : 24,
    fork : 12,
    cabinet : true,
    drainingTap : true,
    plateRack: true,
    mitten : false,
}

console.log(kitchenContent.mitten)
console.log(kitchenContent)

let house = {
    numberOfflats : 2,
    carpark : true,
    carWashpark: true,
    flowerpots : true,
    playground : true,
}

console.log(house)*/

let laptopRecord = {
    name : `HP`,
    model : `Elitebook`,
    memorySpace : 512,
    ram : `8gb`,
    chargingPort : true,
    color : `Silver`,
    year : 2018

}


let customerDetails = {
    customerName : `Joan`,
    id : 4568,
    location : `Nairobi`,
    lastPaidamount : 400,
    isCustomerowing : false
}

// object literal nesting
// when you put a function in an object literal, it becomes an

const studentRecord = {
    studentName : `Keisha`,
    studentRegnumber : 12345,
    yearOfadmission : 2022,
    yearOfgraduation : 2026,
    firstYearscore : 90,
    secondYearscore : 95,
    averageScore : function(){
       let result = (this.firstYearscore + this.secondYearscore) / 2
       return(result)
    }
}

console.log(studentRecord.averageScore())

