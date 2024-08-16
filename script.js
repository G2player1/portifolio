function menuShow(){
    let link1 = document.querySelector('#link1');
    let link2 = document.querySelector('#link2');
    let link3 = document.querySelector('#link3');
    if (link1.classList.contains('open')){
        link1.classList.remove('open');
        link2.classList.remove('open');
        link3.classList.remove('open');
    } else {
        link1.classList.add('open');
        link2.classList.add('open');
        link3.classList.add('open');
    }
}

