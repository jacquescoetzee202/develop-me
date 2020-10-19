// ... your function here
let oaps = objects => {

    return objects.filter(obj => obj.age > 65);
}


(() => {
    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 34 };
    let c = { name: "Charlie", age: 24 };
    let d = { name: "Bob", age: 97 };

    let folks = [a, b, c, d];

    console.log(
        oaps(folks), // [{ name: "Bob", age: 97 }]
    );
})();