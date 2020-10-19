// ... your function here

let max = (num1,num2) => num1 > num2 ? num1 : num2;

let largest = (values) => {
    // your code here
    let currentMax;

    for (i = 0; i < values.length; i += 1){
        currentMax = max(currentMax,values[i]);
    }

    return currentMax;
};


console.log(
    largest([2, 4, 6, 4, 7, 5]), // 7
    largest([-2, 4, 6, 4, 2, -7, 5]), // 6
    largest([-2, -4, -4, -7, -5]), // -2
);