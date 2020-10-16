// ... your object class here
class Address {
    constructor(streetAddress,postcode,town) {
        this.streetAddress = streetAddress;
        this.postcode = postcode;
        this.town = town;
    }
    fullAddress() {
        return `${this.streetAddress}, ${this.town}, ${this.postcode}`;
    }
}

let address = new Address("1 Made Up Street", "BS4 8TR", "Bristol");

console.log(
    address.postcode, // BS4 8TR
    address.town, // Bristol
    address.fullAddress(), // "1 Made Up Street, Bristol, BS4 8TR"
);
