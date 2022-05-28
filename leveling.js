let _cazador = "Debil - Mago - Espadachin - Tanque - Asesino"
let estadisticas = {
    vida: 0,
    fuerza: 0,
    habilidades: [],
    addEstadisticas: function(v,f,h){
        this.vida = v
        this.fuerza = f
        this.habilidades = h
    }
}


let $name = "sun jin-woo"
let $tipo = ""
let $skills = {}

let play = function(){
    let verificarName = String(prompt(`tu nombre es ${$name}? [y/n]`)).toLowerCase()
    if(verificarName === "n" || verificarName === "no"){
        $name = String(prompt("Entonces cual e stu nombre?"))

    }
    
    let elegirTipo = function(){
        $tipo = String(prompt(`Elige tu tipo de cazador...\n${_cazador}`)).toLowerCase()
        switch($tipo){
            case "debil":
                $tipo = "Debil"
                $skills = {
                    vida: 200,
                    escudo: 100,
                    habilidades: {
                        golpe: 20,
                        patada: 30,
                        cabezazo: 40
                    }
                }
                break;
            case "mago":
                $tipo = "Mago"
                $skills = {
                    vida: 250,
                    escudo: 150,
                    habilidades: {
                        flechaDeFuego: 55,
                        curacion: 20,
                        hechisoGlacear: 55
                    }
                }
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
    }
    elegirTipo()
    
    let ingresarMasmorra = function(){
        let resultSuerte = ["jugador se encontro con un Mounstro",
                        "jugador no encontro ningun Mounstro",
                        "jugador se encontro con un Mounstro"]
        let suerte = 1

        let probarSuerte = function(min, max){
            return Math.floor( ( Math.random() * (max - min + 1) ) + min )
        }
        suerte = probarSuerte(0,2)
        console.log(resultSuerte[suerte])
    }

}

// play()