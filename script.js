// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const calcAge = birthYear => 2026 - birthYear;
console.log(calcAge(2003));

const number = [2, 3, 4, 5, 6, 7, 8, 89, 1];
let maxNum = number[0];
for (let i = 0; i < number.length; i++) {
  if (number[i] > maxNum) {
    maxNum = number[i];
  }
}
console.log(`Max number is : ${maxNum}`);
