let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById ('reiniciar')
    sectionReiniciar.style.display ="none"


    let = botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener ('click', seleccionarMascotaJugador )

    let botonFuego =document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua =document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = "flex"

    let = inputHipodoge = document.getElementById('hipodoge')
    let = inputCapipepo = document.getElementById ('capipepo')
    let = inputRatigueya = document.getElementById ('ratigueya')
    let = spanMascotaJugador = document.getElementById ('mascota-jugador')
    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'YUMANNI'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'ACQUALINO'
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'TIRRENO'
    } else {
        alert('Selecciona una mascota')
    }
    
    seleccionarMascotaEnemigo()


}

function seleccionarMascotaEnemigo () {
    let = mascotaAleatoria = aleatorio(1,3)
    let = spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'YUMANNI'
    } else if (mascotaAleatoria ==2) {
        spanMascotaEnemigo.innerHTML = 'ACQUALINO'
    } else {
        spanMascotaEnemigo.innerHTML = 'TIRRENO'
    }
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

        combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje('BATALLA:EMPATADA!')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('BATALLA:GANADA!!!')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('BATALLA:GANADA!!!')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('BATALLA:GANADA!!!')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    } else {
        crearMensaje('BATALLA:PERDIDA!!')
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("SIIIII,GANASTE!!!!")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("LO SIENTO,PERDISTE!")
    }    
}

function crearMensaje (resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function reiniciarJuego(){
    location.reload()
}

function crearMensajeFinal (resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal
    

    let botonFuego =document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua =document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById ('reiniciar')
    sectionReiniciar.style.display ="block"
}
window.addEventListener('load', iniciarJuego)