let isOdd = num => num % 2 === 1;

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

console.log(
    odds([1, 2, 3]), // [1, 3]
    odds([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
);