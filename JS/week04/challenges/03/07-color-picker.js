((d) => {
    const pickedColor = d.getElementById('picker');

    console.log(pickedColor);

    const redRange = d.getElementById('red');
    const greenRange = d.getElementById('green');
    const blueRange = d.getElementById('blue');

    let redRgb = redRange.value;
    let greenRgb = greenRange.value;
    let blueRgb = blueRange.value;

    redRange.addEventListener('change', () => {
        redRgb = redRange.value;

        let rgb = `rgb(${redRgb},${greenRgb},${blueRgb})`;
        
        pickedColor.style.backgroundColor = rgb;
    });

    greenRange.addEventListener('change', () => {
        greenRgb = greenRange.value;

        let rgb = `rgb(${redRgb},${greenRgb},${blueRgb})`;
        
        pickedColor.style.backgroundColor = rgb;
    });

    blueRange.addEventListener('change', () => {
        blueRgb = blueRange.value;

        let rgb = `rgb(${redRgb},${greenRgb},${blueRgb})`;
        
        pickedColor.style.backgroundColor = rgb;
    });




})(document);