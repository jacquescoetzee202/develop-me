// ... your function here

let average = values => {
    let sum = values.reduce((sum, val) => {
        return sum + val;
    }, 0);

    return sum / values.length;

}

console.log(
    average([2, 3, 4, 5, 6]), // 4
    average([2, 3]), // 2.5
    average([10, 30]), // 20
    average([-4, -8, -9]), // -7
);