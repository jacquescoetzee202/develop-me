((d) => {
    const password = d.getElementById('password');
    const helpText = d.getElementById('form-help');

    password.addEventListener('keydown' , () => {
        const passwordLength = password.value.length;

        if (passwordLength < 10){
            password.style.backgroundColor = 'red';
            helpText.innerText = 'Weak as mate';
        }
        if (passwordLength < 18 && passwordLength >= 10){
            password.style.backgroundColor = 'orange';
            helpText.innerText = 'Good enough';
        }

        if (passwordLength >= 18){
            password.style.backgroundColor = 'green';
            helpText.innerText = 'Bob on!';
        }


    })
})(document);