// ... your function here
let capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

let titleCase = string => {
    let words = string.split(" ");
    let upperCaseWords = words.map(capitalizeFirstLetter);

    return upperCaseWords.join(" ");
}

console.log(
    titleCase("hello, my name is Jim"), // "Hello, My Name Is Jim"
);