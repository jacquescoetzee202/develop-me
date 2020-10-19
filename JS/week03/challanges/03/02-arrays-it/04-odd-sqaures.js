// ... your function here
let sqr = n => n*n;
let odd = num => num % 2 === 1;

let oddSquares = values => {
    let squares = values.map(sqr);
    return squares.filter(odd);
}

console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
    oddSquares([2, 3, 4]), // [9]
);

// refactored
/*
let oddSquares = values => {
    return values.map(sqr).filter(odd);
}
*/