((d) => {
    const main = d.getElementById('main');
    const removeBtn = d.getElementById('remove');

    const selected = [];

    main.addEventListener('click' , event => {
        const clicked = event.target;

        //console.log(clicked);

        if (clicked.tagName = 'P'){
            clicked.classList.add('selected');
            selected.push(clicked);
            //console.log(selected);
        };
    });

    removeBtn.addEventListener('click' , () => {
        selected.forEach(paragraph => paragraph.remove());
    });

})(document);