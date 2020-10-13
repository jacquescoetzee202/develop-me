let skip = (skip, max) => {
    // ... your code here
    let total = 0;
    for (let i = 1; i < max; i += 1){
        console.log(`BEFORE: i = ${i} total = ${total}`);
        if (i % skip === 0){
            total += 0;
        } else {
            total += i;
        }
        console.log(`AFTER i = ${i} total = ${total}`);
    }
    return total;
}

console.log(
    skip(4, 20), // 1 + 2 + 3 + 5 + 6 + 7 + 9 + 10 + 11 + 13 + 14 + 15 + 17 + 18 + 19 = 150
);