let secciones = ["calendario_mesa.html", "contacto.html"]
let btnReservaMesa, btnContacto;

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    btnReservaMesa = document.getElementById("btnReservaMesa");
    btnContacto = document.getElementById("btnRegistro");
}

function crearEventos(){
    btnReservaMesa.addEventListener("click", enrutador);
    btnContacto.addEventListener("click", enrutador);
}

function enrutador(evento){
    switch(evento.target.id){
        case "btnReservaMesa":
            location.href = secciones[0];
            break;
        case "btnContacto":
            location.href = secciones[1];
            break;
    }
}