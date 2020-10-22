((d) => {
    const button = d.getElementById('button');
    const main = d.getElementById('main');

    button.addEventListener('click',()=>{
        const para = d.createElement('p');
        para.innerText = 'Clicked!';
        main.append(para);
    });
})(document);