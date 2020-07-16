const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const about = document.querySelector('#lf');
let parrafo = document.querySelector('p');

var es=false;
var cel = false;
function sies(){
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     cel =true;
 }else{
     cel=false;
     es=true;
 }} //sabemos si esta en celular o no
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
    sies();
    if(cel==true){
    setTimeout(eso, 400);//para contabilizar el tiempo para que vuelva a salir despues de minimizar el nav
    }
});
navLinks.addEventListener("click", () => {
   
     navLinks.classList.toggle("open");
     links.forEach(link =>{
         link.classList.toggle("fade");
     })
     sies();
     if(cel==true){
     setTimeout(eso, 600);
     }
 });
function eso(){
    if(es ==false){

        es = true;
       parrafo.style.display='none';
      about.style.display='none';
    }else{

        es = false;
        parrafo.style.display='block';
    about.style.display='block';
    }
}