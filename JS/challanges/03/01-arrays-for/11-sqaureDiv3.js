// ... your function here
let squares = (values) => {
    // your code here
    let result = [];

    for (i = 0; i < values.length; i += 1){
        result.push(values[i]*values[i]);
    }

    return result;
};

let multipleOf3 = num => num % 3 === 0;

let divisibleBy3s = (values) => {
    // your code here
    let result = [];

    for (i = 0; i < values.length; i += 1){
        
        if (multipleOf3(values[i])){
            result.push(values[i]);
        }

    }

    return result;
};

let squaresDivisibleBy3 = values => {
    
    let sqaured = squares(values);

    let by3 = divisibleBy3s(sqaured);

    return by3;
}


console.log(
    squaresDivisibleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
);