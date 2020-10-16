//8. Write function that translates a string to Pig Latin. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
let pigLatinInstance = string => string.substr(1) + string.charAt(0).toLowerCase() + "ay";

let pigLatin = str => {

    let words = str.split(" ");

    return words.map(pigLatinInstance).join(" ");

};

let result = pigLatin("The quick brown fox");
console.log("Expected: hetay uickqay rownbay oxfay, Actual: " + result);
console.log("hetay uickqay rownbay oxfay" === result);

result = pigLatin("The secret plans are in the bunker");
console.log("Expected: hetay ecretsay lanspay reaay niay hetay unkerbay, Actual: " + result);
console.log("hetay ecretsay lanspay reaay niay hetay unkerbay" === result);

result = pigLatin("How now brown cow"); // true
console.log("Expected: owhay ownay rownbay owcay, Actual: " + result);
console.log("owhay ownay rownbay owcay" === result);