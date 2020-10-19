let min = (num1,num2) => num1 < num2 ? num1 : num2;

let lowest = (values) => {

    let currentMin;

    for (i = 0; i < values.length; i += 1){
        currentMin = min(currentMin,values[i]);
    }

    return currentMin;
};



console.log(
    lowest([2, 4, 6, 4, 7, 5]), // 2
    lowest([-2, 4, 6, -7, 5]), // -7
    lowest([-2, -4, -11, -8, -4, -7, -5]), // -11
);