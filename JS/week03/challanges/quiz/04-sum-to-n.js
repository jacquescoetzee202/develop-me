// 4. Write a function that takes a number, n, as an argument. Return the sum of all values from 1 to n.

let sumToN = n => {
    total = 0;
    for (i = n; i > 0; i -= 1){
        total += i;
    };

    return total;
    // your code here
};

let result = sumToN(4);
console.log("Expected: 10, Actual: " + result);

result = sumToN(100);
console.log("Expected: 5050, Actual: " + result);

result = sumToN(123456789);
console.log("Expected: 7620789436823655, Actual: " + result);