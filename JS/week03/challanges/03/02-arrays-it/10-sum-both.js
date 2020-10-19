// ... your function here
let sumBoth = (arr1, arr2) => {
    let sum1 = arr1.reduce((acc,val) => acc + val,0);
    let sum2 = arr2.reduce((acc,val) => acc + val,0);

    return sum1 + sum2;

}

console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
    sumBoth([2, 3, 4, 5, 6], [5, 10, 12]), // 47
);