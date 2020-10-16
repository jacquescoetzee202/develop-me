// ... your function here
let prime = num => {
    let squareRt = Math.floor(Math.sqrt(num));

    for (i = 2; i <= squareRt ; i += 1){
        if (num % i === 0){
            return false;
        };
    };
    return num > 1;
}

let nextPrime = startNum => {
    
    let currentNum = startNum;
    
    while (!prime(currentNum)) {
        currentNum += 1;
    }

    return currentNum;
}

let nthPrime = num => {

    let currentPrime = 0;

    for (let i = 1; i <= num; i += 1){

        currentPrime += 1;
        currentPrime = nextPrime(currentPrime);

    };

    return currentPrime;
}

console.log(
    nthPrime(1), // 2
    nthPrime(2), // 3
    nthPrime(10), // 29
    nthPrime(100), // 541
    nthPrime(1000), // 7919
);