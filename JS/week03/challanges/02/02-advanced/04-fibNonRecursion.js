let fibonacci = n => {
    // need to add all the varaibles n, n-1, n-2
    let fibNn;
    let fibN_1;
    let fibN_2;
    for (i = 0; i <= n; i += 1){
        
        if (i === 0){
            currentFib = 0;
        };

        if (i === 1){
            currentFib += 1;
        };

        if (i === 2){
            currentFib += i + (i - 1) + (i - 2);
        } else if (i > 2) {
            currentFib += currentFib + previousFib
        };

    };
    return currentFib;
}

console.log(
    
    fibonacci(0), // 0
    fibonacci(1), // 1
    fibonacci(2), // 1
    fibonacci(3), // 2
    fibonacci(4), // 3
    fibonacci(5), // 5
    fibonacci(6), // 8
    fibonacci(10), // 55
);

/*
n =	0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	...
xn =0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	610	... */