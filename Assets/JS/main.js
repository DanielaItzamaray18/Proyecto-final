function menuFunction(){

    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    }else{
        menuBtn.classList = "nav-menu"
    }
}

/*----------------TYPING EFFECT-----------------------*/
var typingEffect = new Typed(".typedText", {
    strings: ["Diseño","Animación"," Modelado 3D"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay:1000
});

/*----------------------SCROLL REVEAL----------------------------------*/

/*----------------------SCROLL ANIMARION-------------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
/*---------HOME------------------------------------*/
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', {delay:100});
sr.reveal('.featured-text-info', {delay:200});
sr.reveal('.featured-text-btn', {delay:200});
sr.reveal('.featured-image', {delay:300});
/*---------HEADIN------------------------------------*/
sr.reveal('.top-header', {});
/*---------ABOUT INFO & CONTACT INFO------------------------------------*/
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});
srLeft.reveal(".about-info",{delay:100});
srLeft.reveal(".contact-info",{delay:100});

/*---------SKILLS & CONTACT FORM------------------------------------*/
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});
srLeft.reveal(".skills-box",{delay:100});
srLeft.reveal(".form-control",{delay:100});
/*---------PROJECTS------------------------------------*/
sr.reveal('.project-box', {interval: 200});


/*-----------------CHANGE ACTIVE LINK------------------------------------ */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);
// Función para ajustar dinámicamente la altura del contenedor de "About" al tamaño de la ventana del navegador
function expandAboutSection() {
    const aboutSection = document.getElementById("about");
    aboutSection.style.height = window.innerHeight + "px";
}

// Función para ajustar dinámicamente la altura del contenedor de "Projects" al tamaño de la ventana del navegador
function expandProjectsSection() {
    const projectsSection = document.getElementById("projects");
    projectsSection.style.height = window.innerHeight + "px";
}

// Llama a las funciones cuando se carga la página y cuando se redimensiona la ventana del navegador
window.onload = function() {
    expandAboutSection();
    expandProjectsSection();
}

window.onresize = function() {
    expandAboutSection();
    expandProjectsSection();
}


   // Obtener el elemento del botón por su ID
   var boton = document.getElementById("nav-button");

   // Agregar un evento de clic al botón
   boton.addEventListener("click", function() {
       // Redirigir a otra página
       window.location.href = "./LogIn.html"; 
   });