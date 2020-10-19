((d) => {
    let textBlocks = [...d.getElementById('main').children];

    let filteredTextBlocks = textBlocks.filter(text => {
        if (text.textContent.search('secret moon base') > 0){
            return text;
        };
    });

    filteredTextBlocks.forEach(text => text.classList.add('redacted'));

})(document);