((d) => {
    const pixels = d.getElementById('pixels');

    pixels.addEventListener('click' , event => {
        const clicked = event.target;

        if (clicked.tagName === 'SPAN'){

            if (clicked.className === 'clicked') {
                clicked.style.backgroundColor = '';
            
            } else {
                clicked.style.backgroundColor = 'green';
            };   
        };

        clicked.classList.toggle('clicked');
    });

})(document);