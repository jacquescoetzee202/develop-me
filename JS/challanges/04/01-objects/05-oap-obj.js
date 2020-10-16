// ... your function here
let oaps = objects => {

    let oapList = objects.reduce((oapObjArray,obj) => {
        console.log(obj.age);
        if (obj.age > 65){
            return oapObjArray.push(obj);
            console.log(oapObjArray);
        } else {
            return oapObjArray;
        }

    },[]);

    return oapList;
}


(() => {
    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 34 };
    let c = { name: "Charlie", age: 24 };
    let d = { name: "Bob", age: 97 };

    let folks = [a, b, c, d];

    console.log(
        oaps(folks), // [{ name: "Bob", age: 97 }]
    );
})();