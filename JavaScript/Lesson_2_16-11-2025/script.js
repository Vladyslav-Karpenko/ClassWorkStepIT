// !! parseInt, parseFloat

// console.log(3.14, typeof 3.14);
// console.log(3, typeof 3);
// console.log(Infinity, typeof Infinity);
// console.log(NaN, typeof NaN);

// let a = "35px";
// console.log(a, typeof a);
// console.log(parseInt(a), typeof parseInt(a));

// console.log(a, typeof a);
// console.log(parseFloat(a), typeof parseFloat(a));

// let b = "35.55";
// console.log(b, typeof b);
// console.log(parseInt(b), typeof parseInt(b));

// console.log(b, typeof b);
// console.log(parseFloat(b), typeof parseFloat(b));

// let str = "55";
// console.log(+str, typeof +str);

// !! + to number

// let age = prompt("How old are you?");
// let ageNumber = +age;
// console.log(ageNumber, typeof ageNumber);

// !! NaN isNaN

// console.log("ljnwsf", isNaN("ljnwsf"));
// console.log("89", isNaN(89));
// console.log(56, isNaN(56));
// console.log(56.555, isNaN(56));

// !!!! MATH

// console.log(Math.round(2.5));
// console.log(Math.round(2.4));

// console.log(Math.ceil(2.2));
// console.log(Math.ceil(2.9));
// console.log(Math.floor(2.9));

// console.log(Math.random()); // random 0 .... 1

// ! random from our value

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(Math.floor(Math.random() * (49 - 35 + 1)) + 35); // random 35 .... 49

// !! Math.min Math.max

// console.log("Max value", Math.max(45, 15, 78, 424, 1, 3));
// console.log("Min value", Math.min(45, 15, 78, 424, 11, 3, -10, -222));

// !! Math.pow

// console.log(Math.pow(4, 5)); // 1024
// console.log(4 ** 5); // 1024

// !!!! Errors with floats

// console.log((0.1 + 0.2).toFixed(2));
// console.log((0.3 - 0.1).toFixed(2));

// let a = (0.1 + 0.2).toFixed(2);
// console.log(typeof a);

// console.log(0.1 + 0.2);

// let str = "Vladyslav Karpenko";

// let symbol_7 = str[0];
// console.log(symbol_7);

// !! INDEX

// console.log(str[str.length - 1]);
// console.log(str.at(1));

// !! CASE CHANGED

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// !! SEARCH index return
// console.log(str.indexOf("a")); // 2
// console.log(str.indexOf("o")); // 17
// console.log(str.indexOf("фыфы")); // -1
// !! SEARCH  bool return
// console.log(str.includes("Karpenko")); // True
// console.log(str.includes("Ivanov"));

// !! deleted spaces from sides

// let name = "        Vlad.   Karpenko.    ";
// console.log(name.trim());

// !! SLICE
// console.log(str.slice(-8, -1));

// !! REPLACE

// let newName = str.replace("Vladyslav", "Honza");
// console.log(newName);

// !! REPEAT

// console.log("Ha".repeat(100));

// !! HOMEWORK.

// !! TASK # 1
// let day = prompt("Enter day");

// let month = prompt("Enter month");

// let year = prompt("Enter year");

// document.body.innerHTML = `<h1 style="color:red">Your date is ${day} ${month} ${year}</h1>
// <p style="color:green; font-weigth: 800;"> Have a good day </p>
// `;

// !! TASK # 2

// let c = prompt("Enter temperature in C degries");
// let f = c * 1.8 + 32;
// document.body.innerHTML