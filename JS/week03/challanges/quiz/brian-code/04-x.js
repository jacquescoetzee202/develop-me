// What does x equal?

let x  = 12;

let add = () => {
    x += 12;
    return x;
};

add(x);

console.log(x); // 24 this is because the function add() takes no inputs and adds 12 to the already existing variable x. As console.log is called after the add function x will be 24.