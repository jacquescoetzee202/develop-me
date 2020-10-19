let arraySum = values => {
    
    let total = 0;

    for (i = 0; i < values.length; i += 1){
        total += values[i];
    }

    return total;
}

let sumBoth = (numArrOne,numArrTwo) => {
    return arraySum(numArrOne) + arraySum(numArrTwo);
};

// ... your function here

console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
    sumBoth([2, 3, 4, 5, 6], [5, 10, 12]), // 47
);