((d) => {
    let image = d.getElementById('image');
    console.log(image);

    let button = d.getElementById('button');

    let initHeight = image.clientHeight;
    let initWidth = image.clientWidth;

    let newHeight = 2 * initHeight + 'px';
    
    let newWidth = 2 * initWidth + 'px';

    image.addEventListener('click', () => {
        image.style.height = newHeight;
        image.style.width = newWidth;
    })

    button.addEventListener('click', () => {
        image.style.height = initHeight + 'px';
        image.style.width = initWidth + 'px';
    });




})(document);