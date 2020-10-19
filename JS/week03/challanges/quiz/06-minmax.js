// 6. Write a function, minmax, that takes an array of numbers and returns the smallest value plus the largest value in the array. Don't use .sort():
let largestNum = (num1,num2) => num1 > num2 ? num1 : num2;
let smallestNum = (num1,num2) => num1 < num2 ? num1 : num2;

let minmax = values => {

    let min = values.reduce(smallestNum,values[0]);
    let max = values.reduce(largestNum,values[0]);

    return min + max;
    
};

let result = minmax([4, 5, 1, 7, 12]); // should work out 1 + 12
console.log("Expected: 13, Actual: " + result);

result = minmax([8, -3, 7, 17, 28]); // should work out -3 + 28
console.log("Expected: 25, Actual: " + result);

result = minmax([-8, -3, -7, -17, -28]); // should work out -3 + -28
console.log("Expected: -31, Actual: " + result);

result = minmax([4]); // should work out 4 + 4
console.log("Expected: 8, Actual: " + result);