// ... your function here
let lowest = values => {
    return values.reduce((acc,val) => {
        return val < acc ? val : acc;
    });
}

console.log(
    lowest([2, 4, 6, 4, 7, 5]), // 2
    lowest([-2, 4, 6, 4, -7, 5]), // -7
    lowest([-2, -4, -11, -4, -7, -5]), // -11
);