// ... your object literal here

let address = {
    postcode: "BS4 8TR",
    town: "Bristol",
    street: "Made Up Street",
    number: 1,
    fullAddress() {
        return `${this.number} ${this.street}, ${this.town}, ${this.postcode}`;
    }
}

console.log(address.postcode); // BS4 8TR
console.log(address.town); // Bristol
console.log(address.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"

// check it works if the variable gets renamed
let renamed = address;
address = 10;
console.log(renamed.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"