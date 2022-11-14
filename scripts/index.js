let ataqueJugador




function iniciarJuego(params) {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonFuego.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonFuego.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
    let inputDoge = document.getElementById('hipodogue')
    let inputPepo = document.getElementById('capipepo')
    let inputGueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-Jugador')


    if (inputDoge.checked == true) {
        alert("Seccionaste a HipoDoge")
        spanMascotaJugador.innerHTML = "HipoDoge"
    }else if (inputPepo.checked == true) {
        alert("Seccionaste a CapiPepo")
        spanMascotaJugador.innerHTML = "CapiPepo"
    }else if (inputGueya.checked == true) {
        alert("Seccionaste a RatiGueya")
        spanMascotaJugador.innerHTML = "RatiGueya"
    }else(
        alert("No has seleccionado todavia ninguna Mascota")
    )

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    let seleccionAleatorio = aleatorio(1,3)
    if (seleccionAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodogue"
    }else if (seleccionAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "CapiPepo"
    }else {
        spanMascotaEnemigo.innerHtml = "RatiGueya"
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}





window.addEventListener('load', iniciarJuego)