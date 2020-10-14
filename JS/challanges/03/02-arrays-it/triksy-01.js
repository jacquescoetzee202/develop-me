// ... your function here
let reverse = values => {

    let splitStr = values.map(val => Array.from(val));

    let reverseSplitStr = splitStr.map(val => val.reverse());
    
    return reverseSplitStr.map(val => val.join(""));
}

console.log(
    reverse(["fish", "bolton", "green"]), // ["hsif", "notlob", "neerg"]
);