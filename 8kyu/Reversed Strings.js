// ❓DESCRIPTION

// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// 🇷🇺 РУС

// Дополните решение так, чтобы оно переворачивало переданную ему строку.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


//  ✅ SOLUTION




function solution(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(solution('world'));
console.log(solution('delroad'));