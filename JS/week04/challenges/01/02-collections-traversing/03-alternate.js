((d) => {
    let tableRows = [...d.getElementById('table').firstElementChild.getElementsByTagName('tr')];

    tableRows.filter((row,index) => {
        if (index % 2 === 0) {
            row.classList.add('alternate');
        };
        
    })


})(document);