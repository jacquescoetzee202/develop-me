
/*Create a function, both, that takes two arrays. Return a new array containing any value that is in both arrays.

Try doing it with .indexOf()
Try doing it without .indexOf()

*/
// ... your function here
let both = (arr1, arr2) => {
    
    let matchedArr = arr1.map(val => {
        return arr2[arr2.indexOf(val)];

    });

    return matchedArr.filter(val => val !== undefined);
    
}

console.log(
    both([2, 3, 4, 5, 6], [1, 2, 5, 6]), // [2, 5, 6]
);