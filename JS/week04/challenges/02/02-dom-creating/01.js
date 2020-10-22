((d) => {
    const rhubarbs = d.getElementById('rhubarbs');

    let fragment = d.createDocumentFragment();

    for (i = 0; i < 100; i += 1){
        let p = d.createElement('p');
        p.textContent = 'Rhubarb';

        fragment.append(p);
    };

    rhubarbs.append(fragment);

})(document);