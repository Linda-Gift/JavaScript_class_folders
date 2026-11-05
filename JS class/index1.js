// function sayMyName(userName, location){
//     let greeting = `Hello ${userName}, how is ${location}?` 

//     console.log(greeting)
// }

// sayMyName(`LindaGift`, `Sweden`)
// sayMyName(`Sunshine`, `Lisbon`)
// sayMyName(`Eunice`, `Ligali`)

// function minScore(firstScore, secondScore, thirdScore, fourthScore, fifthScore){
//     let result = Math.min(firstScore, secondScore, thirdScore, fourthScore, fifthScore)
//     console.log(result)
    
// }

// minScore(30,50,100,80,70)

// function vacationCity(userName, ...favoriteCity){
//  let result = `Hey ${userName}, your favorite cities are ${favoriteCity}`

//  console.log(result)
// }

// vacationCity(`LindaGift', "Uppsala, Stokholm, Lund, Manchester`)

// let weekDays = [
//     `Monday`,
//     `Tuesday`,
//     `Wednesday`,
//     `Thursday`,
//     `Friday`,
//     `Saturday`,
//     `Sunday`

// ]
// console.log(weekDays)

// Array functions/methods
// Unshift method adds an item to the beginning of an array
// shift method will remove an item from the beginning of an array
// pop method will remove an item from the end of an array
// push method will add an item at the end of an array
// reverse method will reposition an item in an array so that the first becomes the last and vice versa
// include method is used to check if an item is included in an array
// indexof method is used to know the position of an item in an array
// lastindexof method is used to know the last position of an item in an array
// slice method is used to cut items in an array to use it but it does not affect the original array. it is another word for copy.
//splice method is used to cut items in an array when you want to delete an item from an array. it is another word for cut.


// weekDays.unshift(`July`)
// let result = weekDays.include(`January`)

// let result = weekDays.splice(1, 4)
// console.log(result)
// console.log(weekDays)

// const studentArray = [
//     {
//         fullname : `Pascal`,
//         country : `Canada`,
//          regNo : `23456`,
//         isStudentActive : true,
//         department : `Sciences`
//     },

//     {
//         fullname : `Pascal`,
//         country : `Cambodia`,
//         regNo : `23456`,
//         isStudentActive : true,
//         department : `Sciences`
//     },

//     {
//         fullname : `Julien`,
//         country : `United Kingdom`,
//         regNo : `23456`,
//         isStudentActive : true,
//         department : `Arts`
//     }


// ]
// // console.log(studentArray)
// // let result = studentArray.splice(2)
// // console.log(result)
// // console.log(studentArray.length)
// // console.log(studentArray)

// let firstArray = [
//     `Sunday`,
//     `Monday`,
//     `Tuesday`,
//     `Wednesday`,
//     `Thursday`,
//     `Friday`,
//     `Saturday`

// ]

// let secondArray = [
//     `January`,
//     `February`,
//     `March`,
//     `April`,
//     `May`,
//     `June`,
//     `July`,
//     `August`,
//     `September`,
//     `October`,
//     `November`,
//     `December`
// ]

// let thirdArray = [
//     2001,
//     2002,
//     2003,
//     2004,
//     2005,
//     2006,
//     2007,
//     2008,
//     2009,
//     2010,
//     2011,
//     2012,
//     2013,
//     2014
// ]


// console.log(firstArray)
// console.log(secondArray)
// console.log(...firstArray, ...secondArray, ...thirdArray)

// let moistArray = [...firstArray, ...secondArray, ...thirdArray]

// // for(let y = 0; y < moistArray.length; y++){
// //     console.log(moistArray[y])
// // }

// moistArray.forEach(function(array){
//  console.log(array)
// })

// for(let x = 1; x <= 12; x++){
//     console.log(`multiplication Table for ${x}`)
//     for(let y = 1; y <= 10; y++){
//         let result = (`${x} X ${y} = ${x * y}`)

//         console.log(result)
//     }
// }

// for (let b = 0; b < 10; b++){
//     if(b === 5){
//         continue
//     }console.log(b)
// }

// for (let b = 0; b < 10; b++){
//     if(b === 5){
//         break
//     }console.log(b)
// }

// con   st ourArray = [`sandra`, `Tokunbo`, `Michael`]

// for(let r = 0; r < ourArray.length; r++){
//     if(r === 1){
//         continue
//     }console.log(ourArray[r])
// }

// for(let r = 0; r < ourArray.length; r++){
//     if(r === 1){
//         break
//     }console.log(ourArray[r])
// }

// while loops

// let z = 0
// while(z < 10){
//     console.log(z)
//     z++
// }

// // do while loop
// let j = 5
// do{
//     console.log(`Yes`)
//     j++
// }while(j < 15)

//     ⭐️ Assignment:

// Create an array of objects.

// Use a for-of loop, while loop, and do-while loop to extract data from the array of objects.

// Create an object literal and use a for-in loop to extract data.


// for(let a = 0; a <= mixedArray.length; a++){
//     console.log(mixedArray[a])
// }

// for(let everything of mixedArray){
//     console.log(everything)
// }
// let mixedArray = [`Apple`, 10, `Amadilo`, 12, `Gazelle`, `Helicopter`, `Melody`, 1, 4, 7, 13]
// let e = 0;
// while(e <= mixedArray.length){
//     console.log(mixedArray[e])
// }e++

// let h = 0
// do{
//     if(h > 5){
//     console.log(`Yes!!!`)
// }h++
// }while(h < mixedArray.length)

//  let result = mixedArray.join()
//  console.log(result)

//  let see = result.split(",")
//  console.log(see)

// let mixedArray = [`Apple`, 10, `Amadilo`, 12, `Gazelle`, `Helicopter`, `Melody`, 1, 4, 7, 13]

//  const filteredArray = mixedArray.filter(function(item){
//     return (item ==="Amadilo")

//  }) 

//  console.log(filteredArray)

//  const modifiedArray = mixedArray.map(function(item){
//     return(item)

//  }) 

//  console.log(modifiedArray)

const container = document.getElementById("container")
container.style.fontSize = '30px'
container.style.color = 'yellow'
container.style.fontFamily = 'inter'
container.style.padding = '100px'

const heading = container.querySelector("#heading")

heading.style.fontSize = '20px'
heading.style.color = 'white'
heading.style.fontWeight = '500'
heading.style.fontFamily = 'inter'
heading.style.padding = '16px'
heading.style.outline = 'none'
heading.style.border = 'none'
heading.style.background = 'blue'
heading.style.borderRadius = '8px'
const paragraph = container.querySelector('#paragraph')
heading.addEventListener("click", function(event){
    paragraph.textContent = 'Do you want to Submit?'
    console.log(event)
})

const button = document.getElementById("heading-1")
button.addEventListener("click", function(){
    if(button.classList.contains("btn-1")){
        button.classList.remove("btn-1")
        button.classList.add("btn-2")
    }else{
   button.classList.add("btn-1")
button.classList.remove("btn-2")    
}
})





// const todaysDate = '12th July, 2024'

// heading.textContent += `${todaysDate}`






// // container.style.border = 
// // const heading = container.querySelector("#heading")
// // console.log(heading)

// // const container = document.getElementById("container")
// // const result = container.removeAttribute("class")
// // console.log(result)

 