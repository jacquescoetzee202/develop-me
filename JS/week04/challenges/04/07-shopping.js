((d) => {

    const items = d.getElementById('items');

    const basketTotal = d.getElementById('total');

    class Item {
        constructor(name, price){
            this.name = name;
            this.quantity = 1;
            this.price = price;
        }

        updateQty() {
            this.quantity += 1;
            return this;
        }
    }
// || Basket array containing grocery objects
    const basket = [];

// || function to creat an array of all the object names.
    const basketItems = () => basket.map(obj => obj.name);
// || function to filter through list and get object by name
    const itemPicker = (itemName) => basket.filter(obj => obj.name === itemName)[0];
// || function to check if grocery item alreay in basket.
    const objectExist = (name) => {
        const currentItems = basketItems();
        return currentItems.includes(name);
    }

// || add the basket objects to the basket section on page.

    const fragment = d.createDocumentFragment();

    const tableBody = d.querySelector('#shopping-list tbody');

    const clearTableBody = (tableBody) => {
        [...tableBody.children].forEach(row => row.remove());
    }

    const sumTotal = (itemsArray) => {
        let total = 0;

        itemsArray.forEach(obj => {
            const price = obj.price;
            const qty = obj.quantity;

            total += (price * qty);
        })

        return total;
    }

    const updateTableBody = (itemsArray,tableBody) => {

        itemsArray.forEach(obj => {

            const row = d.createElement('tr');
            const nameCell = d.createElement('td');
            const qtyCell = d.createElement('td');
            const priceCell = d.createElement('td');

            nameCell.innerText = obj.name;
            qtyCell.innerText = obj.quantity;
            priceCell.innerText = obj.price;

            row.append(nameCell,qtyCell,priceCell);

            fragment.append(row);

        })

        tableBody.append(fragment);
    }

// || event listener looking for click on any Add button
    items.addEventListener('click' , event => {
        
        const clicked = event.target;

        const name = clicked.dataset.name;
        const price = clicked.dataset.price;

        if (clicked.tagName === 'BUTTON'){

            clearTableBody(tableBody);

            if (objectExist(name)){

                itemPicker(name).updateQty();
            
            } else {

                const obj = new Item(name,price);

                basket.push(obj);

            }

            updateTableBody(basket,tableBody);

            basketTotal.innerText = sumTotal(basket);

        }

    })
       
})(document);