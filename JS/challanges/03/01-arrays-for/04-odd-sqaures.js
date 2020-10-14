// ... your function here
let isOdd = num => num % 2 === 1;

let squares = (values) => {
    // your code here
    let result = [];

    for (i = 0; i < values.length; i += 1){
        result.push(values[i]*values[i]);
    }

    return result;
};

let odds = (values) => {
    // your code here
    let oddValues = [];

    for (i = 0; i < values.length; i += 1){

        if (isOdd(values[i])) {
            oddValues.push(values[i]);
        };
        
    };

    return oddValues;
};

let oddSquares = values => {
    let sqauredVals = squares(values);
    return odds(sqauredVals);
}


console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
    oddSquares([2, 3, 4]), // [9]
);
