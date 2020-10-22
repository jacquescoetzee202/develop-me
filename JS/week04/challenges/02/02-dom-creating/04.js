((d) => {
    let strings = [
        "katastichophobia",
        "rhabdophobia",
        "eisoptrophobia",
        "papaphobia",
        "hypegiaphobia",
        "odontophobia",
        "ergophobia",
        "pteronophobia",
        "taphephobia",
        "apiphobia",
    ];

// create a new list with the upper <li>'s upperList = [a,e,h,k,o,p,r,t];

    let upperList = strings.reduce((firstLetters , string) => {

        let firstLetter = string[0];

        if (firstLetters.includes(firstLetter)){

            return firstLetters;

        } else {
  
            return firstLetters.concat(firstLetter);
        };

    },[]);


    upperList.sort();

// iterating over the upperList and creating an li with an empty nested ul for each item in upperList.

const uList = d.createElement('ul');

    upperList.forEach(textContent => {
        let li = d.createElement('li');
        let ul = d.createElement('ul');
        
        li.innerText = textContent.toUpperCase();
        li.append(ul);
        uList.append(li);
    })


    const upperListLis = [...uList.children]

// iterating over the origonal array. creating an li with the string and appending it to the nested ul's

    strings.forEach(string => {
        let li = d.createElement('li');
        
        li.innerText = string;

        upperListLis.forEach(upperLi => {
            if (upperLi.firstChild.data.toLowerCase() === string[0]){
                upperLi.firstElementChild.append(li);
            };
        })
    })

    // adding to the DOM


    const main = d.getElementById('phobias');

    main.append(uList);





})(document);