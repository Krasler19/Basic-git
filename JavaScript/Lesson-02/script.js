// let age = 28;

// // string - "string" 'string'
// // number - -10, 10, 0, 4.5
// // boolean - true/false
// // null - empty 
// //undefined - присутність 

// let a;

// console.log(a); //undefined

// console.log(typeof "10"); //string

// console.log( 5 == "5"); //true
// console.log(7 === "7"); //false
// console.log(10 >= 10); //true
// console.log(10 % 3); //1
// console.log(15 % 13); //2
// console.log(100 % 2); //0


// //! =============================

// Явне зведення типів

// Number() - намагаеться перетворити будь-що на число 
// String() - намагаеться перетворити будь-що на строку
// Boolean() - намагаеться перетворити буль-що на буліан 


// let number = Number(prompt("Введіть будь яке число від 1 до 10."))

// console.log(number + 4);

// console.log(Number("Hello"));
// console.log(String(100));
// console.log(Boolean(" "));

/*
True: Будь яка числа чи число (ціле, дробове, від'ємне), крім нуля | будь-яка строка з символами | 
False: 0, пуста строка, null, undefined
*/

//!==================================

// Неявне зведення типів
// ==
// + - унарний плюс( неявно перетворює на число)
// + "" - неявне перетворення на строку 
// !! - неявне перетворення на Boolean

// console.log(+"15");
// console.log(150 + "");

//!====================================

//? Логічні оператори

//* Логічне НІ - ! - змінює логічний тип на зворотній (був тру - стане фолз і навпаки)

// console.log(!true)
// console.log(!false)

// console.log(!0) // true | 0 -> false -> !false -> true

// console.log(!" ") // false | " " -> true -> !true -> false

// console.log(!-69) // false | -69 -> true -> !true -> false

// console.log(!!"") // false | "" -> false -> !(!false) -> !true -> false

//* Логічне АБО - || > повертає перший true з переліку, якщо на одного true не знайдено - повертає останній

// console.log(0 || 4 || false); // false
// console.log("" || false || " " || undefined); // " "
// console.log(false || "" || null || 0); // 0

//* Логічне І - && > повертає перший false з переліку, якщо ні одного false не знайдено - повертає останній 
// console.log( 4 && -9 && true && 0 && "hello"); // 0
// console.log(10 && " " && "0" && -1 && false && null); // false
// console.log(true && 1 && "null" && " " && -9); //-9

// console.log( 4|| (0 && 1) || "000"); //4|| 0 || "000" > 4
// console.log("І" || ("hate" && "love") || 5); //І

// console.log(0 || (1 && null && false) || 5 || -9); // 5 


//  1. (1 && null && false) > null

/*
1. запитайте у користувача два числа 
2. потрібно вивести сумму, різницю, добуток, і ділення цих двух чисел (можна в консоль,
можна в алерт)
*/

let first = Number(prompt("введіть перше число"));
let second = Number(prompt("введіть друге число"));
console.log(first + second);
console.log(first - second);
console.log(first * second);
console.log(first / second);