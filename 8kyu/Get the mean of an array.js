// ❓DESCRIPTION

// t's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
//     Return the average of the given array rounded down to its nearest integer.
//
//     The array will never be empty.


// 🇷🇺 РУС

// Наступил конец учебного года, решающий момент для школьного отчета. Нужно рассчитать средние баллы. Все ученики подходят к вам и умоляют
// рассчитать их средние баллы. Легко! Вам нужно всего лишь написать сценарий.
//
//     Верните среднее значение заданного массива, округленное до ближайшего целого числа в меньшую сторону.
//
//     Массив никогда не будет пустым.


//  ✅ SOLUTION
let marks = [1,1,1,1,1,1,1,2];

function getAverage(marks){
    let average = 0;
    for (let i = 0; i < marks.length; i++) {
        average = average + marks[i]
        console.log(average)
    }
        return  Math.floor(average/marks.length)

}

console.log(getAverage(marks));