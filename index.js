"use strict";
// // Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number
numbers.forEach(num => {
    let ordinalNum;
    if (num === 1) {
        ordinalNum = "st";
    }
    else if (num === 2) {
        ordinalNum = "nd";
    }
    else if (num === 3) {
        ordinalNum = "rd";
    }
    else {
        ordinalNum = "th";
    }
    ;
    console.log(`${num}${ordinalNum}`);
});
