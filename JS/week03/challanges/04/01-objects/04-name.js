// ... your function here
let names = objects => {

    let nameArray = objects.map(obj => obj.name)

    return nameArray.join(",");

}

(() => {
    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 34 };
    let c = { name: "Charlie", age: 24 };

    let people = [a, b, c];

    console.log(
        names(people), // "Alice, Bob, Charlie"
    );
})();