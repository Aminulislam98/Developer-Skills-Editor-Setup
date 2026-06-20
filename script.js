// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const calcAge = birthYear => 2026 - birthYear;
// console.log(calcAge(2003));

// const number = [2, 3, 4, 5, 6, 7, 8, 89, 1];
// let max = number[0];
// let min = number[0];
// for (let i = 0; i < number.length; i++) {
//   if (number[i] > max) {
//     max = number[i];
//   } else if (number[i] < min) {
//     min = number[i];
//   }

//   number[i] > max ? (max = number[i]) : (min = number[i]);
// }
// console.log(`Max number is : ${max}`);
// console.log(`Min number is : ${min}`);

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof temps[i] !== "number") continue;

//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// calcTempAmplitude([3, 4, 6, 7, 1, 5, 4]);
// const amplitude = calcTempAmplitude([3, 4, 5], [4, 5, 2]);
// console.log(amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees celsius")),
//   };
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// prompt() method gives always string ;
