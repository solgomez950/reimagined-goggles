const sectionReiniciar = document.getElementById("boton-reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById("Hipodoge")
const inputCapipepo = document.getElementById("Capipepo")
const inputRatigueya = document.getElementById("Ratigueya")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
    }
}
let Hipodoge = new Mokepon("Hipodoge", "./imagenes/hipodogeuno.png", 5)
                
let Capipepo = new Mokepon("Capipepo", "./imagenes/capipepouno.png", 5)

let Ratigueya = new Mokepon("Ratigueya", "./imagenes/ratigueyauno.png", 5)

Hipodoge.ataques.push(
    { nombre: 'agua', id: 'boton-agua' },
    { nombre: 'agua', id: 'boton-agua' },
    { nombre: 'agua', id: 'boton-agua' },
    { nombre: 'fuego', id: 'boton-fuego' },
    { nombre: 'tierra', id: 'boton-tierra' },
)
Capipepo.ataques.push(
    { nombre: "tierra", id: "boton-tierra" },
    { nombre: "tierra", id: "boton-tierra" },
    { nombre: "tierra", id: "boton-tierra" },
    { nombre: "agua", id: "boton-agua" },
    { nombre: "fuego", id: "boton-fuego" },
)
Ratigueya.ataques.push(
    { nombre: "fuego", id: "boton-fuego" },
    { nombre: "fuego", id: "boton-fuego" },
    { nombre: "fuego", id: "boton-fuego" },
    { nombre: "agua", id: "boton-agua" },
    { nombre: "tierra", id: "boton-tierra" },
)
mokepones.push(Hipodoge,Capipepo,Ratigueya)

function iniciarJuego() {
   
    sectionReiniciar.style.display = "none"
    
    sectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto}
            </label>`
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    
    botonFuego.addEventListener('click', ataqueFuego)
    
    botonAgua.addEventListener('click', ataqueAgua)
    
    botonTierra.addEventListener("click", ataqueTierra)
    
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = "none"
    
    sectionSeleccionarAtaque.style.display = "flex"

    

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    }
    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML ="Ratigueya"
    } else{
        alert("No has seleciionado una mascota")
    } 
    seleccionarMascotaEnemigo() 
}


function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    
    
    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}
function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()    
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    ataqueAleatorio = aleatorio(1, 3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }
    combate()
}

function combate() {
    

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")
        
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
    
}
function revisarVidas() {
    if(vidasJugador == 0){
        //ganaste
        crearMensajeFinal("LO SIENTO HAS PERDIDO")
    } else if(vidasEnemigo == 0){
        //perdiste
        crearMensajeFinal("FELICITACIONES! GANASTE")
    }
}
function crearMensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal) {
    
    
    

    sectionMensajes.innerHTML = resultadoFinal

    
    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true
    
    sectionReiniciar.style.display = "block"
}
function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)