document.getElementById("sobre").addEventListener("click", function(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("formulario").style.display = "block";
});

function mostrarInvitacion() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;

    if (nombre && apellido){
        const mensaje = "${nombre} ${apellido}, está usted cordialmente invitado a realizar un sueño reparador en la casa de la Srta. Daniela Calviño el día Martes 5 de Noviembre . Horario a convenir. Agradecemos su confirmación mediante WhatsApp.";
        document.getElementById("textoInvitacion").textContent = mensaje;

        document.getElementById("formulario").style.display = "none";
        document.getElementById("invitacion").style.display = "block";
    } else {
        alert("Por favor, ingrese su nombre y apellido");
    }
}