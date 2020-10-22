((d) => {
    const main = d.getElementById('main');

    main.addEventListener('click' , event => {
        const clicked = event.target;

        if (clicked.tagName === 'BUTTON'){
            const newButton = d.createElement('button');

            newButton.innerText = 'Click me!';

            newButton.classList.add('btn', 'btn-primary');
            main.append(newButton);
            console.log(newButton);
        }
    })
})(document);