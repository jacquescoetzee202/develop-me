((d) => {
    const buttons = d.getElementById('buttons');
    const answer = d.getElementById('answer');
    const value1 = d.getElementById('value1');
    const value2 = d.getElementById('value2');



    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;

    buttons.addEventListener('click' , event => {
        const clicked = event.target;
        const num1 = parseInt(value1.value);
        const num2 = parseInt(value2.value);
        
        if (clicked.id === 'add'){
            answer.innerText = add(num1,num2);
        };
        if (clicked.id === 'subtract'){
            answer.innerText = subtract(num1,num2);
        };
        if (clicked.id === 'multiply'){
            answer.innerText = multiply(num1,num2);
        };
        if (clicked.id === 'divide'){
            answer.innerText = divide(num1,num2);
        };
    })

})(document);