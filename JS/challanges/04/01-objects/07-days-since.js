// ... your function here
let daysSince = date => {
    let now = new Date();
    let startDay = new Date(date);
    let timeLapsed = now - startDay;

    return Math.floor(timeLapsed / 8.64e7);
}

console.log(
    daysSince("1984-04-16"), // 13 thousand and something
    daysSince("1991-10-27")
    // why not try *your* date of birth?
);

