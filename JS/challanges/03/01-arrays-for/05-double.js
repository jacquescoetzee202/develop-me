let double = (values) => {
    // your code here
    let result = [];

    for (i = 0; i < values.length; i += 1){
        result.push(values[i]*2);
    }

    return result;
};


console.log(
    double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
    double([1, 2, 5]), // [2, 4, 10]
);