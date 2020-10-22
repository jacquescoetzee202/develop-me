((d) => {
    const uList = d.createElement('ul');
    
    const fragment = d.createDocumentFragment();

    fragment.append(uList);

    console.log(fragment);

    let liList = [];
    for (let i = 65; i <= 90; i += 1){
        
        let li = d.createElement('li');
        
        li.innerText = String.fromCharCode(i);
        
        liList.push(li);
    };

    liList.forEach(li => uList.append(li));

    const main = d.getElementById('alphabet');

    main.append(fragment);


})(document);