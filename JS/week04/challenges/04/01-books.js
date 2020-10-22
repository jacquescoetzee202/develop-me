((d) => {
    const list = d.getElementById('list');
    const main = d.querySelector('main');
    const pElement = d.createElement('p');
    
    
    main.append(pElement);

    list.addEventListener('click' , event => {

        let clicked = event.target;

        if (clicked.tagName === 'LI'){
            const author = clicked.dataset.author;
            const price = clicked.dataset.price;

            const text = `Author: ${author}, Price:$${price}`;

            pElement.innerText = text;
            pElement.classList.add('well');
        };
    })

})(document);