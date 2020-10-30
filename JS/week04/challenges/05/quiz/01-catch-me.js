((d) => {
    const button = d.getElementById('button');

    let transform = 40;
    let position = 0;

    button.addEventListener('click' , () => {
        position += transform;
        button.style.transform = `translateY(${position}px)`;
    })
})(document);