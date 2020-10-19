// ... your function here
let sumItself = num => num + num;

let double = values => {
    return values.map(sumItself);
}

console.log(
    double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
    double([1, 2, 5]), // [2, 4, 10]
);