((d) => {
    widthSpan = d.getElementById('width');
    heightSpan = d.getElementById('height');

    widthSpan.textContent = `${window.innerWidth}`;
    heightSpan.textContent = `${window.innerHeight}`;
    
    window.addEventListener('resize', () => {
        widthSpan.textContent = `${window.innerWidth}`;
        heightSpan.textContent = `${window.innerHeight}`;
    });

})(document);