((d) => {
    const widthSpan = d.getElementById('width');
    const heightSpan = d.getElementById('height');

    const setValues = () => {
        widthSpan.textContent = `${window.innerWidth}`;
        heightSpan.textContent = `${window.innerHeight}`;
    };

    setValues();

    window.addEventListener('resize', setValues);

})(document);