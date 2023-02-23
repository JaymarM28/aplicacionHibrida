let secciones = ["calendario_mesa.html", "contacto.html"]
let btnReservarMesa, btnContactenos;

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    btnReservarMesa = document.getElementById("btnReservarMesa");
    btnContactenos = document.getElementById("btnContactenos");
}

function crearEventos(){
    btnReservarMesa.addEventListener("click", enrutador);
    btnContactenos.addEventListener("click", enrutador);
}

function enrutador(evento){
    switch(evento.target.id){
        case "btnReservarMesa":
            location.href = secciones[0];
            break;
        case "btnContactenos":
            location.href = secciones[1];
            break;
    }
}