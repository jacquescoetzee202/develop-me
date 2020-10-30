((d) => {

    console.log('hello')
    const links = d.getElementById('links');
    const output = d.getElementById('output');

    console.log(links);

    links.addEventListener('click' , event => {

        event.preventDefault();

        const clicked = event.target;

        const choice = clicked.innerText;

        output.innerText = choice;
    })
})(document);