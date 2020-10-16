let x  = 12;

let add = (x) => {
    x += 12;
    return x;
};

add(x);

console.log(x); // predicted answer : 24

// answer should be 12 !!! this is because you are only adding 12 in the add() function. Futhermore you are only adding 12 to whatever argument you put into the function. the function will spit out 24 in this instance but will not update the variable x.