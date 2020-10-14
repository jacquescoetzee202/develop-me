// ... your function here
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

console.log(
    divisibleBy3s([1, 2, 3, 4, 5, 6]), // [3, 6]
    divisibleBy3s([3, 4, 5, 9]), // [3, 9]
);