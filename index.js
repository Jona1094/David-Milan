const nav = document.getElementById ("wow");
const header = document.querySelector ('.header')
const heart = document.getElementById ("heart");
const heart2 = document.getElementById ("heart2");
const modal = document.querySelector(".modal");
const slider = document.querySelector ("#slider");
let sliderSection = document.querySelectorAll (".slider__section");
const sliderImg = document.querySelectorAll (".slider__img");
let sliderSectionLast = sliderSection [sliderSection.length - 1];
const btnLeft = document.querySelector ("#btnizq");
const btnRigth = document.querySelector ("#btnder");
const btnCierra = document.querySelector('#btn-cierra');
const xMobileNav = document.querySelector (".menunavX");
const imagenes = Array.from(document.querySelectorAll (".container #galeria img"));
const flecha = document.getElementById ("flecha-compartir");
const alerta = document.getElementById ("caje");
const salidaAlert = document.getElementById ("salidaX");
const menumobile = document.getElementById ("menumobile");
const salidaMobile = document.getAnimations ("salidaMobile");
const mobilepadre = document.getElementById ("navmobile-padre");
const flechaIzq = document.querySelector (".flecha-salidaMobile");
const container = document.querySelector ('.container')
const footer = document.querySelector ('.footer')
const logo = document.querySelector ('.imglogo')
const abrirCerrar = document.querySelector ('.abrir-cerrar')
let imageIndex = 0;

/* Abrir */

const abreLightbox = (event) => {
  modal.style.animation = "abrir 0.7s forwards";
  modal.style.display = "flex";
  abrirCerrar.style.display = "none";
  imageIndex = imagenes.indexOf(event.target);
  menumobile.style.display = "none";

  slider.innerHTML = `
    <div class="slider__section">
      <img class="slider__img" src=${imagenes.at(imageIndex).src} alt="">
    </div>
    <p class="p">${imagenes.at(imageIndex).dataset.desc}</p>
  `;
scrollY(0);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});

/*Cierra el Lightbox */

btnCierra.addEventListener('click', () => {
  document.documentElement.style.overflow = "auto";
  modal.style.animation = "cerrar .7s forwards";
  abrirCerrar.style.display = "flex";
  setTimeout(()=>{
    modal.style.display = "none";
  },700)
});



/* nav prueba */

const abrirnav = (event) => {
  if ("click") {
    nav.style.animation = "abrir 6s forwards";
    nav.style.animation = "flex";
  }
  };

/* Touch Heart: contador de MG */

let numero = "";
const number = document.getElementById ("number");

function touchHeart () {
  heart.style.display = "none";
  heart2.style.display = "flex";
  numero++;
  number.innerHTML = numero;
}

function touchHeart2 () {
  heart2.style.display = "none";
  heart.style.display = "flex";
  numero--;
  number.innerHTML = numero;
  
}

heart.addEventListener ("click", touchHeart);
heart2.addEventListener ("click", touchHeart2);


/* mover */

// slider.insertAdjacentElement ("afterbegin", sliderSectionLast);

function moverDerecha () {
  imageIndex--;
  slider.innerHTML = `
    <div class="slider__section">
    <img class="slider__img" src=${imagenes.at(imageIndex).src} alt="">
    </div>
    <p class="p">${imagenes.at(imageIndex).dataset.desc}</p>
  `;
  slider.style.opacity = "0";
  slider.style.animation = "";
  setTimeout(()=>{
  slider.style.animation = "mover 2s forwards";
  slider.style.opacity = "0";
  },50)
  setTimeout (function(){
    slider.style.transition = "none";
    // slider.style.marginLeft = "-100%";
  }, 500);
}

function moverIzquierda () {
    imageIndex++;
    slider.innerHTML = `
    <div class="slider__section">
      <img class="slider__img" src=${imagenes.at(imageIndex).src} alt="">
    </div>
    <p class="p">${imagenes.at(imageIndex).dataset.desc}</p>
    `;
  slider.style.marginLeft = "0";
 /*  slider.style.transition = "all 0.5s" */
  slider.style.animation = "mover 2s forwards";
  setTimeout (function(){
    slider.style.transition = "none";
    // slider.style.marginLeft = "-100%";
  }, 500);
}

btnRigth.addEventListener ("click", function(){
  moverIzquierda();
});

btnLeft.addEventListener ("click", function(){
  moverDerecha();
  });

  /* ALERTA */


 function flechaC () {
  if ("click") {
    alerta.style.display = "flex";
    slider.style.opacity = ".6";
  
  }
 }

 flecha.addEventListener ("click", flechaC);

 /* Cerrar alerta */

 function cerrarAlerta() {
  if ("click") {
    alerta.style.display = "none";
    slider.style.opacity = "1";
  }
 }

 salidaAlert.addEventListener ("click", cerrarAlerta);

/* menu mobile */

function mobileNav () {
  if ("click") {
    menumobile.style.display = "none";
    xMobileNav.style.display = "flex";
    mobilepadre.style.display = "flex";
    mobilepadre.style.animation = "mover 2s forwards"
  } 
}
 menumobile.addEventListener ("click", mobileNav);

 function salidaMob () {
    if ("click") {
      xMobileNav.style.display = "none";
      menumobile.style.display = "flex";
      mobilepadre.style.display = "none";
    }
 }

 xMobileNav.addEventListener ("click", salidaMob);
 
/*  */

function flechaSalida () {
  if ("click") {
    modal.style.display = "none";
    document.documentElement.style.overflow = "flex";
  }
}

flechaIzq.addEventListener ("click", flechaSalida);




