//Boton de desplazamiento hacia arriba
const subir = document.getElementById('desplazarse-hacia-arriba');

subir.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})

//Barra de progreso
const progressBar = document.getElementById('progressBar');
const body = document.body;

function actualizarProgreso () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = body.scrollHeight - window.innerHeight;
    const scrollPorcentaje = (scrollTop / scrollHeight) * 100;

    progressBar.value = scrollPorcentaje;

    //visibilidad de la barra

    if (scrollTop > 0) {
        progressBar.style.display = 'block'
    } else {
        progressBar.style.display = 'none'
    }
}

//Actualizacion de barra de progreso cuando se realiza el desplazamiento
window.addEventListener('scroll', actualizarProgreso);

//Actualiza la barra de progreso cuando la página se carga inicialmente
window.addEventListener('load', actualizarProgreso);

//boton de menu en responsive

const menu = document.getElementById('btn-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

menu.addEventListener("click", () => {
    ul.classList.toggle('show');
});

//Para que se cierre el menu al seleccionar una seccion

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove('show')
    })
)