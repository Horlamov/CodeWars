// ❓DESCRIPTION

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
//     P.S. Each array includes only integer numbers. Output is a number too.


// 🇷🇺 РУС

// Я новичок в программировании, и теперь мне нужно получить сумму двух массивов... Точнее, сумму всех их элементов. Буду благодарен за помощь.
//
//     P.S. Каждый массив содержит только целые числа. Результатом также является число.


//  ✅ SOLUTION
function arrayPlusArray(arr1, arr2) {
    let a = [];
    a = arr1.concat(arr2);
    console.log(a);
    return a.reduce((a, b) => a + b)
}

console.log(arrayPlusArray([1, 2, 3],[4,5,6]));