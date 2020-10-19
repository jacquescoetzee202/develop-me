
let squareRoot = num => Math.floor(Math.sqrt(num));

let even = num => (num+2) % 2 === 0;

let prime = num => {

    if (num > 2 && even(num)){
        return false;
    };

    let squareRt = squareRoot(num);

    for (i = 2; i <= squareRt ; i += 1){

        if (num % i === 0){
            return false;
        };

    };

    return num > 1;
}


console.log(
    prime(2), // true
    prime(3), // true
    prime(4), // false
    prime(7), // true
    prime(15), // false
    prime(85), // false
    prime(257), // true
    prime(5119), // true
    prime(5121), // false
    prime(17523), // false
    prime(15487319), // true
    prime(1), // false - by definition, get it working for the rest first
);