// ... your function here
let fibonacci = n => {
    
    if ( n === 0){
        return 0;
    }
    
    if (n <= 2) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
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