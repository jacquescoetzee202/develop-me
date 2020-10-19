// ... your function here

let timesBy = (values,multiplier) => {

    let result = values.map(val => val * multiplier)

    return result;
}

console.log(
    timesBy([2, 3, 4, 5, 6], 10), // [20, 30, 40, 50, 60]
    timesBy([2, 3, 4, 5, 6], 5), // [10, 15, 20, 25, 30]
    timesBy([2, 3, 4, 5, 6], -5), // [-10, -15, -20, -25, -30]
    timesBy([-2, -3, -4, -5, -6], -5), // [10, 15, 20, 25, 30]
);