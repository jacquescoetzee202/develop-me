((d) => {
    const todo = d.getElementById('todo');
    const button = d.getElementById('add');
    const list = d.getElementById('list');

    button.addEventListener('click',() => {
        let li = d.createElement('li');

        li.innerText = todo.value;
        li.classList.add('list-group-item');

        list.append(li);
    });

})(document);