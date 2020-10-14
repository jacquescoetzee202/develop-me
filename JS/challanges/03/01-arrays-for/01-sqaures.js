let squares = (values) => {
    // your code here
    let result = [];

    for (i = 0; i < values.length; i += 1){
        result.push(values[i]*values[i]);
    }

    return result;
};

console.log(
    squares([2, 3, 4]), // [4, 9, 16]
    squares([2, 3, 4, 5, 6]), // [4, 9, 16, 25, 36]
);