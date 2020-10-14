// ... your function here
let squareIt = val => val * val;

let multipleOf3 = num => num % 3 === 0;

let squaresDivisbleBy3 = values => {
    let sqauredVals = values.map(squareIt);
    return sqauredVals.filter(multipleOf3);
}

console.log(
    squaresDivisbleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
);