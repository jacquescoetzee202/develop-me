// ... your function here
let average = values => {
    
    let sum = 0;

    for (i = 0; i < values.length; i += 1){
        sum += values[i];
    };

    return sum / values.length;
}

console.log(
    average([2, 3, 4, 5, 6]), // 4
    average([2, 3]), // 2.5
    average([10, 30]), // 20
    average([-4, -8, -9]), // -7
);