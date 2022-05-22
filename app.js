let search=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()=> {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu=document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()=> {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll=()=>{
    menu.classList.toggle('active');
    search.classList.remove('active');
};

//Header
let header = document.querySelector('header');

window.addEventListener('scroll' , ()=> {
    header.classList.toggle('shadow', window.scrollY>0);
})

fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
    .then(response=> {
            console.log(response);
    })