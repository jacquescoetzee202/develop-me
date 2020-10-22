((d) => {
    const button = d.getElementById('submit');
    const fields = [...d.querySelectorAll('.form-group')];
    



    button.addEventListener('click' , event => {
        
        fields.forEach( fieldDiv => {

            const inputValue = fieldDiv.querySelector('.form-control').value;

            const helpBlock = fieldDiv.querySelector('p');

            if(inputValue){

                fieldDiv.className = 'form-group';

                if(helpBlock){
                    helpBlock.remove();
                };
                
            } else {

                event.preventDefault();

                fieldDiv.className = 'form-group has-error';

                if(!helpBlock) {

                    const p = d.createElement('p');
                    p.innerText = 'Field Required';
                    p.className = 'help-block';
    
                    fieldDiv.append(p);

                };
            };
        });
    });
})(document);

