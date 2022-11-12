function iniciarJuego(params) {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)  
}

function seleccionarMascotaJugador() {
    if (document.getElementById('hipodogue').checked == true) {
        alert("Seccionaste a HipoDoge")
    }else if (document.getElementById('capipepo').checked == true) {
        alert("Seccionaste a CapiPepo")
    }else if (document.getElementById('ratigueya').checked == true) {
        alert("Seccionaste a RatiGueya")
    }
}



window.addEventListener('load', iniciarJuego)