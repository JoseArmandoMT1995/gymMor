document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__register").addEventListener("click", register);
window.addEventListener("resize",anchoPagina);

var contenedor__login__register = document.querySelector(".contenedor__login-register");
var formulario__login = document.querySelector(".formulario__login");
var formulario__register = document.querySelector(".formulario__register"); 
var caja__tracera_login = document.querySelector(".caja__tracera-login");
var caja__tracera_register = document.querySelector(".caja__tracera-register");

function register(){
    if (window.innerWidth > 850) {
        formulario__register.style.display = "block";
        formulario__login.style.display = "none";
        contenedor__login__register.style.left = "410px";
        caja__tracera_register.style.opacity = "0";
        caja__tracera_login.style.opacity = "1";
    } else {
        formulario__register.style.display = "block";
        formulario__login.style.display = "none";
        contenedor__login__register.style.left = "0px";
        caja__tracera_register.style.display = "none";
        caja__tracera_login.style.display = "block";
        caja__tracera_login.style.opacity = "1";
    }
}
function iniciarSesion(){
    if (window.innerWidth > 850) {
        formulario__register.style.display = "none";
        formulario__login.style.display = "block";
        contenedor__login__register.style.left = "10px";
        caja__tracera_register.style.opacity = "1";
        caja__tracera_login.style.opacity = "0";
    } else {
        formulario__register.style.display = "none";
        formulario__login.style.display = "block";
        contenedor__login__register.style.left = "0px";
        caja__tracera_register.style.display = "block";
        caja__tracera_login.style.display = "none";
    } 
}
function anchoPagina() {

    if (window.innerWidth > 850) {
        caja__tracera_login.style.display = "block";
        caja__tracera_register.style.display = "block";
    } else {
        caja__tracera_register.style.display = "block";
        caja__tracera_register.style.opacity = "1";
        caja__tracera_login.style.display = "none";
        formulario__login.style.display = "block";
        formulario__register.style.display = "none";
        contenedor__login__register.style.left = "0px";
    }
}
anchoPagina();