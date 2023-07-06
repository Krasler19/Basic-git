// function logMsg() {
//     console.log("111 Hello world!");
//     console.log("second msg");
//   }

//   logMsg();
//   console.log("===========");
//   logMsg();

//   console.log(5 ** 2)
//   console.log(5 * 5)
//   console.log(Math.pow(5, 2))

//   console.log(5 * 5 + 4 * 4);
//   console.log(10 * 10 + 2 * 2);
//   console.log(7 * 7 + 9 * 9);

//   function calcSumOfSquares(a, b) {
//     console.log(a * a + b * b);
//   }

//   calcSumOfSquares(10, 9);
//   calcSumOfSquares(7, 3);
//   calcSumOfSquares(12, 5);

// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a, b) {
//     if (a < b) {
//       console.log (a);
//     } else {
//       console.log (b);
//     }
//   }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// напишіть функцію, яка перевіряє чи входить якесь число в заданий діапазон, наприклад checkNumber(1, 100, -5) -> return false. checkNumber(5, 15, 8) -> return true

// checkNumber(min, max, number)

// * if else, && (Logical AND), return

// function checkNumber(min, max, number) {
//   //   if (number >= min && number <= max) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }

//   return number >= min && number <= max;
// }

// // 50 >= 1 && 50 <= 100 -> true && true -> true
// // -101 >= -100 && -101 <= 100 -> false && true -> false

// console.log(checkNumber(1, 100, 50));
// console.log(checkNumber(-100, 100, -101));

function calculateSquare(a, b) {
  return a * b;
}

console.log(calculateSquare(4, 6)); 
console.log(calculateSquare(7, 3)); 
console.log(calculateSquare(10, 10)); 