((d) => {
    let lis = [...d.getElementById('list').querySelectorAll('li')];
    lis.forEach(li => li.classList.add('list-group-item'));
    console.log(lis);


})(document);