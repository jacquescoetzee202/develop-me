((d) => {
    const button = d.getElementById('button');
    const counter = d.getElementById('counter');

    let count = 0;

    button.addEventListener('click',()=>{
        count += 1;
        counter.innerText = count + '';
    });

})(document);