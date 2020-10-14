// ... your function here
let largest = values => {
    return values.reduce((acc,val) => {
        return val > acc ? val : acc;
    });
}

console.log(
    largest([2, 4, 6, 4, 7, 5]), // 7
    largest([-2, 4, 6, 4, -7, 5]), // 6
    largest([-2, -4, -6, -4, -7, -5]), // -2
);