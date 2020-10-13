// ... your function here
let wow = n => {
    let letterOs = "";
    for (let i = 1; i <= n; i += 1){
        letterOs += "o";
    }
    return `W${letterOs}w`;
}

console.log(wow(12)); // "Woooooooooooow"
console.log(wow(4)); // "Woooow"