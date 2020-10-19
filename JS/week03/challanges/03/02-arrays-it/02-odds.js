let odds = (values) => {

    return values.filter(num => num % 2 === 1);
};

console.log(
    odds([1, 2, 3]), // [1, 3]
    odds([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
);