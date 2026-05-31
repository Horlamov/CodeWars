// ❓DESCRIPTION

// Given an array of integers your solution should find the smallest integer.
//
//     For example:
//
//     Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// 🇷🇺 РУС

// Дана последовательность целых чисел. Ваше решение должно найти наименьшее целое число.
//
//     Например:
//
// Учитывая [34, 15, 88, 2]ваше решение, вы получите ответ.2
// Учитывая [34, -345, -1, 100]ваше решение, вы получите ответ.-345
// В рамках данного задания можно предположить, что предоставленный массив не будет пустым.


//  ✅ SOLUTION
// let  arr = [0, 3, 5, 6, 1, -30];

function findSmallestInt(arr) {

    if (arr && arr.length > 0) {
        let less = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < less) {
                less = arr[i]
            }

        }
        return less;
    } else {
        return 0
    }
}

console.log(findSmallestInt([60, 2, 3, 5, -66, 1, -30]));