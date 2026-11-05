// governmentDetails ={
//     citizenName : `Michael`,
//     dateOfBirth : 1991,
//     year : 2024,
//     NIN : 123456789,
//     location : `Lagos`,
//     age : function(){
//         let result = (this.year - this.dateOfBirth)
//         return(result)
//     }
// }
// governmentDetails.age()
// console.log(governmentDetails.age())

// //destructuring
// let {year} = governmentDetails
// console.log(year)

// // inheritance
// const customerRecord = Object.create(governmentDetails)
// customerRecord.profession = `Banker`
// customerRecord.officeLocation = `Lekki`
// console.log(customerRecord.officeLocation)
// // console.log(customerRecord)

// //Array
// let mixedArrays = [
//     governmentDetails = {
//         citizenName : `Michael`,
//         dateOfBirth : 1991,
//         year : 2024,
//         NIN : 123456789,
//         location : `Lagos`,
//         age : function(){
//             let result = (this.year - this.dateOfBirth)
//             return(result)
//         }
//     },
//     weekDays = [
//         `Monday`,
//         `Tuesday`,
//         `Wednesday`,
//         `Thursday`,
//         `Friday`,
//         `Saturday`,
//         `Sunday`
    
//     ]

// ]

// console.log(`This ${this.governmentDetails.citizenName} was born in ${this.governmentDetails.dateOfBirth}. He is now ${governmentDetails.age()} born on ${mixedArrays[1][1]}`)

console.log(`This ${mixedArrays[0].citizenName} was born in ${mixedArrays[0].dateOfBirth}. He is now ${mixedArrays[0].age()} born on ${mixedArrays[1][1]}`)

