const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const about = document.querySelector("#lf");
let parrafo = document.querySelector("p");
var es = false;
var cel = false;
//console.log("Mi resolución de pantalla es: "+screen.width + " px por "+screen.height); //Saber la resolución de pantalla por JS
function sies() {
  //metodo para saber si entra por celular o por web normal
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    cel = true;
  } else {
      if(hamburger.clientHeight>0 && es !=true){ //con este condicional sabremos si el div llamado con la clase hamburguesa aparecerá
        //en la pantalla, pues este aparece en las pantallas pequeñas y en pantallas de celulares (responsivo) y contiene animation of open
        //Esto quiere decir que cuando no este en pantalla su ancho es de 0 y when not is more of 0 (29 exactly)
        cel = true;
        es = false;
      }else if(hamburger.clientHeight==0){
    cel = false;
    es = true;
      }
  }
} //sabemos si esta en celular o no
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
 doit(400);//tiempo de animación de salida y de regreso (dependiendo)
});
navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  doit(600);//tiempo de animación de salida y de regreso (dependiendo)
});
function eso() {
  //alert(es);
  if (es == false) {
    es = true;
    parrafo.style.display = "none";
    about.style.display = "none";
  } else {
    es = false;
    parrafo.style.display = "block";
    about.style.display = "block";
  }
}
function doit($valor){ 
    sies();
    if (cel == true) {//con esto sabremos si estamos en un pantalla pequeña con lo cual tendremos que ocultar div's and more cosas a medida
    //para el momento de la animación no queden vistos en pantalla (o sea se vea mal)
        setTimeout(eso, $valor); //para contabilizar el tiempo para que vuelva a salir despues de minimizar el nav
      } else {
        eso();
      }
}
