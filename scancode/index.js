for(let x = 1; x <= 12; x++){
    console.log(`multiplication Table for ${x}`)
    for(let y = 1; y <= 10; y++){
        let result = (`${x} X ${y} = ${x * y}`)

        console.log(result)
    }
}

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

// const ourArray = [`sandra`, `Tokunbo`, `Michael`]

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
let mixedArray = [`Apple`, 10, `Amadilo`, 12, `Gazelle`, `Helicopter`, `Melody`, 1, 4, 7, 13]
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

 let result = mixedArray.join("/")
 console.log(result)

