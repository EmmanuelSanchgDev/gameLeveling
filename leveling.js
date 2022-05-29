let jugador = {
    nombre: "sun jin-woo"
}
let salto = "--------------------------------\n"
const saludoInicial = `Es un honor conocerte cazador `

let verificarNombre = function(){
    let nombreCorrecto = prompt(`Bienvenido Cazador, antes de comenzar por favor dime este es tu nombre? ${jugador.nombre} [y/n]`).toLowerCase()
    if(nombreCorrecto === "y" || nombreCorrecto === "si"){
        console.log(salto + saludoInicial)
    } else {
            let verificarNombreEscrito = function(){
                jugador.nombre = String(prompt(`${salto}Lamento la comfucion, por favor dime cual es tu nombre correcto para registrarlo nuevamente en el sistema`))
                nombreCorrecto = prompt(`${salto}Muchas gracias tu nombre a quedado correctamente registrado como ${jugador.nombre}, por favor dime lo eh escrto bien? [y/n]`).toLowerCase()
                if(nombreCorrecto === "y" || nombreCorrecto === "si"){
                    console.log(`${salto}muchas gracias ${saludoInicial}${jugador.nombre}`)
                } else {
                    verificarNombreEscrito()
                }
            }
        verificarNombreEscrito()
    }
}
let tipoCazador = function(){
    let opcionesCazadores = "1- Humano \n2- Mago \n3- Caballero \n4- Tanque \n5- Asesino"
    let humano = {
        tipo: "Humano",
        nombre: jugador.nombre,
        vida: 150,
        habilidades: [
            {golpe: 20},
            {patada: 30},
            {cabezazo: 35}
        ],
        oro: 100
    }
    let mago = {
        tipo: "Mago",
        nombre: jugador.nombre,
        vida: 200,
        habilidades: [
            {'flecha Ignea': 40},
            {'hechizo de Hielo': 50},
            {'curacion': 30}
        ],
        oro: 150
    }
    let caballero = {
        tipo: "Caballero",
        nombre: jugador.nombre,
        vida: 250,
        habilidades: [
            {espada: 50},
            {envestida: 60},
            {'tajada cortante': 70}
        ],
        oro: 200
    }
    let tanque = {
        tipo: "Tanque",
        nombre: jugador.nombre,
        vida: 300,
        habilidades: [
            {'golpe de Escudo': 50},
            {'fuerza Bruta': 80},
            {'hacha Desgarradora': 100}
        ],
        oro: 300
    }
    let asesino = {
        tipo: "Asesino",
        nombre: jugador.nombre,
        vida: 400,
        habilidades: [
            {sigilo: 80},
            {'daga Sangriente': 150},
            {mutilar: 200}
        ],
        oro: 500
    }
    let eleccionTipo = parseInt(prompt(`${salto}ahora que ya estas registrado solo falta que nos indique el tipo de Cazador que eres \n${opcionesCazadores}`))
    let tipo = {}
    switch (eleccionTipo) {
        case 1:
            console.log(`${salto}Tus cualidades como cazador del tipo ${humano.tipo} seran: \nvida = ${humano.vida} \nhabilidades = ↓ \n${Object.keys(humano.habilidades[0])} ${Object.values(humano.habilidades[0])} \n${Object.keys(humano.habilidades[1])} ${Object.values(humano.habilidades[1])} \n${Object.keys(humano.habilidades[2])} ${Object.values(humano.habilidades[2])} \n$${humano.oro}`)
            tipo = humano
            break;
        case 2:
            console.log(`${salto}Tus cualidades como cazador del tipo ${mago.tipo} seran: \nvida = ${mago.vida} \nhabilidades = ↓ \n${Object.keys(mago.habilidades[0])} ${Object.values(mago.habilidades[0])} \n${Object.keys(mago.habilidades[1])} ${Object.values(mago.habilidades[1])} \n${Object.keys(mago.habilidades[2])} ${Object.values(mago.habilidades[2])} \n$${mago.oro}`)
            tipo = mago
            break;
        case 3:
            console.log(`${salto}Tus cualidades como cazador del tipo ${caballero.tipo} seran: \nvida = ${caballero.vida} \nhabilidades = ↓ \n${Object.keys(caballero.habilidades[0])} ${Object.values(caballero.habilidades[0])} \n${Object.keys(caballero.habilidades[1])} ${Object.values(caballero.habilidades[1])} \n${Object.keys(caballero.habilidades[2])} ${Object.values(caballero.habilidades[2])} \n$${caballero.oro}`)
            tipo = caballero
            break;
        case 4:
            console.log(`${salto}Tus cualidades como cazador del tipo ${tanque.tipo} seran: \nvida = ${tanque.vida} \nhabilidades = ↓ \n${Object.keys(tanque.habilidades[0])} ${Object.values(tanque.habilidades[0])} \n${Object.keys(tanque.habilidades[1])} ${Object.values(humatanqueno.habilidades[1])} \n${Object.keys(tanque.habilidades[2])} ${Object.values(tanque.habilidades[2])} \n$${tanque.oro}`)
            tipo = tanque
            break;
        case 5:
            console.log(`${salto}Tus cualidades como cazador del tipo ${asesino.tipo} seran: \nvida = ${asesino.vida} \nhabilidades = ↓ \n${Object.keys(asesino.habilidades[0])} ${Object.values(asesino.habilidades[0])} \n${Object.keys(asesino.habilidades[1])} ${Object.values(asesino.habilidades[1])} \n${Object.keys(asesino.habilidades[2])} ${Object.values(asesino.habilidades[2])} \n$${asesino.oro}`)
            tipo = asesino
            break;
        default:
            console.log(`${salto}Cazador por favor elige una Opcion numerica valida`)
            tipoCazador()
            break;
    }
    let confirmarTipo = prompt(`${salto}deseas Comfirmar tu tipo de Cazador, Cazador ${jugador.nombre}[y/n]`).toLowerCase()
    if(confirmarTipo === "y" || confirmarTipo === "si"){
        jugador = tipo
        console.log(`Bien Cazador ${jugador.nombre} ahora estas registrado como cazador del tipo ${jugador.tipo}`)
    }
}
let tienda = function(){
    let objetosTienda = [
        {id: 1, nombre: "espada", puntos: 20, tipo: "poder", valor: 80},
        {id: 2, nombre: "orbe de poder", puntos: 35, tipo: "poder", valor: 120},
        {id: 3, nombre: "filo de cuchilla", puntos: 50, tipo: "poder", valor: 135},
        {id: 4, nombre: "escudo", puntos: 100, tipo: "vida", valor: 100},
        {id: 5, nombre: "capa de invisibilidad", puntos: 150, tipo: "vida", valor: 150}
    ]
    let i = 1
    let disponible = ""
    objetosTienda.forEach(
        function(elemento){
            disponible += `${i}- ${elemento.nombre} aumentos de puntos ${elemento.puntos} los puntos de aplicaran a ${elemento.tipo} el Objeto tiene un costo de ${elemento.valor}\n`
            i++
        }
    )

    let eleccionArticulo = parseInt(prompt(`${salto}Bienvenido a la tienda esto es lo que tengo para ofrecer \n${disponible}`))
    if(eleccionArticulo <= objetosTienda.length){
        objetosTienda.find(
            function(elemento){
                if(eleccionArticulo === elemento.id){
                    console.log(`Haz elegido el objeto ${elemento.nombre}`)
                }
            }
        )
    } else if (isNaN(eleccionArticulo)){
        console.log("por favor elige una opcion numerica")
    }
}

let menu = function(){
    let menuPrincipal = "1- ir a la Tienda \n2- Ir a una Masmorra \n3- Ir a Casa a Descansar"
    let opcion = parseInt(prompt(`${salto}Muy buen casador ahora que ya esta todo en regla esto es lo que puedes hacer \n${menuPrincipal}\nElige una opcion numerica`))
    switch (opcion) {
        case 1:
            tienda()
            break;
        case 2:
            masmorra()
            break;
        case 3:
            descansar()
            break;
        default:
            console.log("por favor elige un valor numerico")
            menu()
            break;
    }
}
let play = function(){
    verificarNombre()
    tipoCazador()
    menu()
}
play()