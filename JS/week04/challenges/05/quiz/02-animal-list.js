((d) => {
    const list = d.getElementById('list');

    list.addEventListener('click' , event => {
        const clicked = event.target;
        clicked.remove();

        list.prepend(clicked);
    })

})(document);
