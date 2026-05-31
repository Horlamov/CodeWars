// DESCRIPTION
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.


//SOLUTION

function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++){
        let c = parseInt(x[i])
        console.log(x)
        sum = sum + c
    }
    return sum
}

console.log('sumMix; ', sumMix(['4', 6 ,'5']))