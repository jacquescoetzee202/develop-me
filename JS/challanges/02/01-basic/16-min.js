// ... your function here
let min = (num1,num2) => num1 < num2 ? num1 : num2;

console.log(
    min(1, 2), // 1
    min(3, -2), // -2
    min(-3, -5), // -5
    min(3, 3), // 3
);