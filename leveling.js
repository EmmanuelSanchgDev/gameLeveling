let _cazadores = "Debil - Mago - Espadachin - Tanque - Asesino"
let mounstruo = [
    {tipo: "Gobling", vida: 50, habilidades: [{ataqueBasico: 5},{ataquePotenciado: 15}]},
    {tipo: "Alto orco", vida: 150, habilidades: [{ataqueBasico: 20},{ataquePotenciado: 35}]},
    {tipo: "Mounstruo desconocido", vida: 300, habilidades: [{ataqueBasico: 30},{ataquePotenciado: 45}]}
    ]
let resultSuerte = [
    "jugador se encontro con un Mounstro",
    "jugador no encontro ningun Mounstro",
    "jugador se encontro con un Mounstro"
    ]
let menuPrincipal = "\n1- Ir a la Tienda\n2- Entrar a una Masmorra\n3- ir a Casa a Descansar"
let leyenda = "haz limpiado la masmorra hazta llegar al piso: " 
let quienInicia
let habilidades = ""
let iHabilidades = 1
let dHabilidades = "- "
let segirBuscando
let suerte
let suerteCantidad
let suerteAtaqueOponente
let level = 1
let verificarName
let oponente

const jugador = {
    $name: "sun jin-woo",
    $vida: 0,
    $oro: 0,
    $tipo: "",
    $skills: []
}
let jugadorOrigin = {}


let probarSuerte = function(min, max){
    return Math.floor( ( Math.random() * (max - min + 1) ) + min )
}

let elegirTipo = function(){
    let eleccion = String(prompt(`Elige tu tipo de cazador...\n${_cazadores}`)).toLowerCase()
    switch(eleccion){
        case "debil":
            jugador.vida = 200
            jugador.$oro = 100
            jugador.$tipo = "Debil"
            jugador.$skills.push(
                {golpe: 20},
                {patada: 30},
                {cabezazo: 35}
            )
            break;
        case "mago":
            jugador.vida = 150
            jugador.$oro = 150
            jugador.$tipo = "Mago"
            jugador.$skills.push(
                {ataque_Igneo: 30},
                {sarpazo_Bestial: 35},
                {escarcha_Glacear: 40}
            )

        //     break;
        // case "espadachin":
        //     console.log("si")
        //     break;
        // case "tanque":
        //     console.log("si")
        //     break;
        // case "asesino":
        //     console.log("si")
        //     break;
        default:
            console.log("por favor elige una de las opciones")
            elegirTipo()
            break;
    }
    jugadorOrigin = jugador
    jugador.$skills.forEach(
        function(poder){
            // console.log(iHabilidades + " " + Object.keys(poder))
            habilidades += iHabilidades + dHabilidades + Object.keys(poder) + "\n"
            iHabilidades++
        }
    )

}

let ingresarMasmorra = function(){
    console.group("en la masmorra")

    console.log(`estas Ingresando a la Masmorra\n *las puertas se habren*`)
    suerte = probarSuerte(0,2)
    console.log(resultSuerte[suerte])
    
    if(suerte === 0 || suerte === 2){
        console.log("la Batalla esta por comienza")
        batalla()
    } else {
        segirBuscando = prompt("no se encontraron mounstruos en este piso, deseas seguir buscando Mounstruos en el siguenpe piso?[y/n]").toLowerCase()
        if(segirBuscando === "y" || segirBuscando === "si"){
            level++
            console.log(`haz entrado al piso ${level}`)
            ingresarMasmorra()
        } else {
            level++
            console.log(`haz salido de la Masmorra, llevaste hasta el nivel ${level}`)
            pago(level)
        }
    }
    console.groupEnd()
}

let pago = function(piso){
    console.group("pago")
    switch (piso) {
        case 0:
            console.log(`pareceque no haz pasado el piso ${piso} de la Masmorra, no recibiras ningun pago`)
            break;
        case 1:
            console.log(`${leyenda} ${piso}, tu pago son 20 Monedas de oro`)
            jugador.$oro += 20
            break;
        case 2:
            console.log(`${leyenda} ${piso}, tu pago son 30 Monedas de oro`)
            jugador.$oro += 30
            break;
        case 3:
            console.log(`${leyenda} ${piso}, tu pago son 70 Monedas de oro`)
            jugador.$oro += 70
            break;
        case 4:
            console.log(`${leyenda} ${piso}, tu pago son 150 Monedas de oro`)
            jugador.$oro += 150
            break;
        case 5:
            console.log(`${leyenda} ${piso}, tu pago son 250 Monedas de oro`)
            jugador.$oro += 250
            break;
        default:
            break;
    }
    console.groupEnd()
}

let batalla = function(){
    console.group("Mounstruo encontrado")

    suerte = probarSuerte(0,2)
    switch (suerte) {
        case 0:
            suerteCantidad = probarSuerte(1,3)
            console.log(`Estas luchando Contra ${suerteCantidad} ${mounstruo[suerte].tipo}`)
            break;
        case 1:
            suerteCantidad = probarSuerte(1,2)
            console.log(`Estas luchando Contra ${suerteCantidad} ${mounstruo[suerte].tipo}`)
            break;
        case 2:
            suerteCantidad = 1
            console.log(`Estas luchando Contra ${suerteCantidad} ${mounstruo[suerte].tipo}`)
            break;
        default:
            break;
    }
    console.groupEnd()

    oponente = mounstruo[suerte].tipo

    quienInicia = probarSuerte(0,1)
    iniciaBatalla(quienInicia)

}

let iniciaBatalla = function(turno){
    
    if(turno){
        turnoJugador()
    } else {
        console.log(`mounstruo inicia la Batalla`)
        turnoOponente()
    }
}

let turnoJugador = function(){
    console.group("jugador elije ataque")
    // console.log("turnoJugador")
    let seleccion = menuAtaqueJugador()

        switch (seleccion) {
            case 1:
                console.log(`jugador a lanzado ${Object.keys(jugador.$skills[0])}`)
                break;
            case 2:
                console.log(`jugador a lanzado ${Object.keys(jugador.$skills[1])}`)
                break;
            case 3:
                console.log(`jugador a lanzado ${Object.keys(jugador.$skills[2])}`)
                break;
            default:
                break;
        }
    console.groupEnd()
}

let turnoOponente = function(){
    console.group("turno Mountruo")

    console.log("Mounstruo Inicia la batalla")
    suerteAtaqueOponente = probarSuerte(0,1)

    switch (suerteAtaqueOponente) {
        case 0:
            console.log(`${oponente} a lanzado ${Object.keys(mounstruo[suerte].habilidades[0])}`)
            break;
        case 1:
            console.log(`${oponente} a lanzado ${Object.keys(mounstruo[suerte].habilidades[1])}`)
            break;
        default:
            break;
    }

}

let menuAtaqueJugador = function(){
    let ataqueJugador = parseInt(prompt(`Jugador Inicia la batalla\nElige tu Ataque\n ${habilidades}`))
    if(isNaN(ataqueJugador)) {
        console.log(`Error, por favor elige un numero`)
        menuAtaqueJugador()
    }
    return ataqueJugador
}

let seleccionJugador = function(){
    let opcionesLobie = parseInt(prompt(`Bienvenido a la Asociasion de casadores, que deceas hacer Cazador ${jugador.$name}? ${menuPrincipal}`))
    switch (opcionesLobie) {
        case 1:
            tienda()
            break;
        case 2:
            ingresarMasmorra()
            break;
        case 3:
            descansar()
            break;
        default:
            console.log(`por favor elige una opcion Numerica valida`)
            seleccionJugador()
            break;
    }
}



let play = function(){
    
    verificarName = String(prompt(`tu nombre es ${jugador.$name}? [y/n]`)).toLowerCase()
    if(verificarName === "n" || verificarName === "no"){
        jugador.$name = String(prompt("Entonces cual es tu nombre?"))

    }
    elegirTipo()
    
    seleccionJugador()

}

play()