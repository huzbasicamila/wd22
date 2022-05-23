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
//GET
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
    .then(response=> {
            console.log(response);
    })

//POST

const addFood = () => {
    const AutoID=document.getElementById("auto-id").value;
    

fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars`, {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify({

      id: AutoID,
     
    })
  })
  .then(responce => {
    console.log(responce);
  })
} 
const deleteCar = (a=-1) => {
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars/-1`, {
      method: 'DELETE'
    })
    .then(res => {
      console.log(res);
    })
  }