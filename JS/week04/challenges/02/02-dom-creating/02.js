((d) => {
    const colorSqaures = [...d.getElementById('items').children];

    const fragment = d.createDocumentFragment();

    colorSqaures.forEach(div => {
        
        let color = div.style.backgroundColor;
        
        let listItem = d.createElement('li');

        listItem.textContent = color;

        fragment.append(listItem);

    });

    const unorderedList = d.getElementById('colours');

    unorderedList.append(fragment);

})(document);