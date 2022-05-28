let _cazadores = "Debil - Mago - Espadachin - Tanque - Asesino"
let mounstruo = [
    {tipo: "Gobling", ataqueBasico: 5, ataquePotenciado: 15},
    {tipo: "Alto orco", ataqueBasico: 20, ataquePotenciado: 35},
    {tipo: "Mounstruo desconocido", ataqueBasico: 30, ataquePotenciado: 45}
    ]
let resultSuerte = [
    "jugador se encontro con un Mounstro",
    "jugador no encontro ningun Mounstro",
    "jugador se encontro con un Mounstro"
    ]
let leyenda = "haz limpiado la masmorra hazta llegar al piso: " 
let quienInicia
let habilidades = ""
let iHabilidades = 1
let dHabilidades = "- "
let segirBuscando
let suerte
let suerteCantidad
let level = 1
let verificarName

let jugador = {
    $name: "sun jin-woo",
    $vida: 0,
    $oro: 0,
    $tipo: "",
    $skills: []
}

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
    jugador.$skills.forEach(
        function(poder){
            // console.log(iHabilidades + " " + Object.keys(poder))
            habilidades += iHabilidades + dHabilidades + Object.keys(poder) + "\n"
            iHabilidades++
        }
    )

}

let ingresarMasmorra = function(){
    
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
            console.log(`haz salido de la Masmorra, llevaste hasta el nivel ${level}`)
            pago(level)
        }
    }
    console.log(level)
}

let pago = function(piso){
    switch (piso) {
        case 1:
            console.log(`pareceque no haz pasado el piso ${piso} de la Masmorra, no recibiras ningun pago`)
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
}

let batalla = function(){
    suerte = probarSuerte(0,3)
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

    quienInicia = probarSuerte(0,1)
    iniciaBatalla(quienInicia)

}

let iniciaBatalla = function(turno){
    
    if(turno){
        turnoJugador()
    } else {
        console.log(`mounstruo inicia la Batalla`)
    }
}

let turnoJugador = function(){
    console.log("turnoJugador")
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
}

let turnoOponente = function(){
    console.log("turnoOponente")
    
}

let menuAtaqueJugador = function(){
    let ataqueJugador = parseInt(prompt(`Jugador Inicia la batalla\nElige tu Ataque\n ${habilidades}`))
    if(isNaN(ataqueJugador)) {
        console.log(`Error, por favor elige un numero`)
        menuAtaqueJugador()
    }
    return ataqueJugador
}





let play = function(){
    
    verificarName = String(prompt(`tu nombre es ${jugador.$name}? [y/n]`)).toLowerCase()
    if(verificarName === "n" || verificarName === "no"){
        jugador.$name = String(prompt("Entonces cual es tu nombre?"))

    }
    
    elegirTipo()
    
    ingresarMasmorra()

}

play()