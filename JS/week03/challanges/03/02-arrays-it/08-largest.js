// ... your function here

let largest = values => {
    return values.reduce((max,val) => {
        return val > max ? val : max;
    },values[0]);
}

console.log(
    largest([2, 4, 6, 4, 7, 5]), // 7
    largest([-2, 4, 6, 4, -7, 5]), // 6
    largest([-2, -4, -6, -4, -7, -5]), // -2
);

// refactored

let max = (num1,num2) => num1 > num2 ? num1 : num2;

let largest = values => {
    return values.reduce(max,values[0]);
}