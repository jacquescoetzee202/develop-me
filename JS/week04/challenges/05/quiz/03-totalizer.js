((d) => {
    const input = d.getElementById('input');
    const button = d.getElementById('button');
    const tracker = d.getElementById('tracker');

    console.log(input);
    let total = 0;

    button.addEventListener('click' , event => {
        event.preventDefault();
        const currentInput = parseInt(input.value);
        total += currentInput;

        tracker.innerText = total;

    })
})(document);