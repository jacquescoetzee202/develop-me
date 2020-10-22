((d) => {
    const input = d.getElementById('input');
    const store = d.getElementById('store');
    const display = d.getElementById('display');
    const list = d.getElementById('list');

    const storedArray = [];

    store.addEventListener('click',() => storedArray.push(input.value));

    display.addEventListener('click',() => {
        console.log(storedArray);
        const fragment = d.createDocumentFragment();
        storedArray.forEach(text => {
            console.log(text);
            let li = d.createElement('li');
            li.innerText = text;
            li.classList.add('list-group-item');
    
            fragment.append(li);

            
        });
        list.append(fragment);
    });

})(document);