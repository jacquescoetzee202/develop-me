// 7. Write a function, longest, that takes an array of strings and returns the longest string:
let longestString = (string1,string2) => string1.length > string2.length ? string1 : string2;

let longest = words => {

    return words.reduce(longestString,"");

};

let result = longest(["cow", "wombat", "aardvark"]);
console.log("Expected: aardvark, Actual: " + result);

result = longest(["fish", "fishiest", "fishier"]);
console.log("Expected: fishiest, Actual: " + result);