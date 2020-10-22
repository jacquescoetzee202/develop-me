((d) => {
/*
    d.body.classList.add('container');
    d.getElementById('header').classList.add('col-md-12');
    d.getElementById('sidebar').classList.add('col-md-4');
    d.getElementById('main').classList.add('col-md-8');
    d.querySelector('#main p').classList.add('lead');
    d.querySelector('.js__first-list').classList.add('lead-group');
    d.querySelector('.js__second-list').classList.add('pagination');
*/
    let firstListLis = [...d.getElementsByClassName('js__first-list')][0].children;

    let lis = [...firstListLis];

    lis.forEach(li => {
        li.classList.add('list-group-item');
    });

})(document);