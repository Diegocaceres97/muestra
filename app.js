const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
let parrafo = document.querySelector('p');
var es = false;

hamburger.addEventListener("click", () => {
   eso();
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
});


function eso(){
    if(es ==false){
        es = true;
       parrafo.style.display='none';
    }else{
        es = false;
        parrafo.style.display='block';
    }
}