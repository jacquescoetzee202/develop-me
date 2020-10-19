((d) => {

    // || 02.
    let addClassTo = (className,selector) => {
        if (d.querySelector(selector)){
            return d.querySelector(selector).classList.add(className);
        } else {
            return d.querySelector(selector);
        };
    }

    let addedEl = addClassTo("col-md-12", ".js__first-list");
    console.log(addedEl); // the <ul> - should have the new class

    let addNoError = addClassTo("col-md-12", ".js__first-list-eek");
    console.log(addNoError); // null

    // || 03.

    let removeClassFrom = (className,selector) => {
        if (d.querySelector(selector)){
            return d.querySelector(selector).classList.remove(className);
        } else {
            return d.querySelector(selector);
        };
    }

    let removedEl = removeClassFrom("col-md-12", ".js__first-list");
    console.log(removedEl); // the <ul> - should have removed the class
    
    let removeNoError = removeClassFrom("col-md-12", ".js__first-list-eek");
    console.log(removeNoError); null

    // || 04. Tricksy
        /*Create a function addClassesTo that takes two arrays as arguments. The first argument represents HTML class names and the second is valid selectors. When you run the function it should add all the class names to all the elements and return an array of the elements. Make sure it doesn't throw an error even if the selector given is invalid.*/

    // your function here
/*
    let addedEls = (classNames,selectors) => {

        selectors.map(selector => {
            if (d.querySelector(selector)){
            classNames.forEach(className => {
                return
            })}
        })


        classNames.map(className => {
            selectors.forEach(selector => { 
                if (d.querySelector(selector)){
                    return d.querySelector(selector).classList.add(className);
                } else {
                    return d.querySelector(selector);
                };
            };
        }
    };

    
    let addedEls = addClassesTo(["col-md-12", "list-group"], [".js__first-list", ".js__second-list"]);
    console.log(addedEls); // the two <ul> elements - should have the new classes

*/
})(document);

