((d) => {
    const blocks = [...d.querySelectorAll('.block')];
    console.log(blocks);

    const isEvan = num => num % 2 === 0;

    let rowLength = 8;

    const rowNum = index => Math.ceil((index + 1) / rowLength);

    blocks.forEach((block, index) => {
        const evan = isEvan(index);
        if(isEvan(rowNum(index))){
            if(!evan) {
                block.style.backgroundColor = 'black';
            }
        } else {
            if(evan) {
                block.style.backgroundColor = 'black';
            }
        }

    })
})(document);