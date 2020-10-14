// ... your function here
let timesBy = (values,multiplier) => {
    // your code here
    let result = [];

    for (i = 0; i < values.length; i += 1){
        result.push(values[i]*multiplier);
    }

    return result;
};


console.log(
    timesBy([2, 3, 4, 5, 6], 10), // [20, 30, 40, 50, 60]
    timesBy([2, 3, 4], 5), // [10, 15, 20]
    timesBy([2, 3, 4, 5, 6, 7], -5), // [-10, -15, -20, -25, -30, -35]
    timesBy([-3, -4, -5, -6], -5), // [15, 20, 25, 30]
);