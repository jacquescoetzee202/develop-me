((d) => {
    
    let divs = [...d.getElementById('items').children];
    
    let sqaureSize = Math.sqrt(divs.length);


    divs.forEach((div,index) => {
        
        let moduloTest = (index + 1) % sqaureSize;
        
        let rowNum = Math.ceil((index + 1) / sqaureSize);
        
        if (moduloTest === 0){
            div.classList.add(`col-4`, `row-${rowNum}`)
        } else {
            div.classList.add(`col-${moduloTest}`, `row-${rowNum}`);
        };
    });

})(document);