let total = (items) => {
    // your code here
    let total = items.reduce((acc, obj) => {
        return acc + obj.price;
    },0);

    return total.toFixed(2);
};

(() => {
    let shoppingList = [{
        name: "coffee",
        price: 3.50,
    }, {
        name: "tea",
        price: 2.50,
    }, {
        name: "toblerone",
        price: 3.20,
    }, {
        name: "newspaper",
        price: 0.10,
    }];

    console.log(
        total(shoppingList), // "9.30"
    );
})();

