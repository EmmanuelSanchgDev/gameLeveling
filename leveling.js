let _cazador = "Debil - Mago - Espadachin - Tanque - Asesino"
let suerte = 1
let level = 0


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
                    dinero: 100,
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
                    dinero: 150,
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
    
    let probarSuerte = function(min, max){
        return Math.floor( ( Math.random() * (max - min + 1) ) + min )
    }

    let ingresarMasmorra = function(){
        let resultSuerte = ["jugador se encontro con un Mounstro",
                        "jugador no encontro ningun Mounstro",
                        "jugador se encontro con un Mounstro"]

        suerte = probarSuerte(0,2)
        console.log(resultSuerte[suerte])
        
        let batalla = function(){
            let mounstruo = [
                {tipo: "Gobling", ataqueBasico: 5, ataquePotenciado: 15},
                {tipo: "Alto orco", ataqueBasico: 20, ataquePotenciado: 35},
                {tipo: "Mounstruo desconocido", ataqueBasico: 30, ataquePotenciado: 45}
            ]
            probarSuerte(0,3)

        }

        if(suerte === 0 || suerte === 2){
            console.log("la Batalla comienza")
            // batalla()
        } else {
            let decicion = prompt("deseas seguir buscando Mounstruos?[y/n]").toLowerCase()
            if(decicion === "y" || decicion === "si"){
                console.log(level)
                level++
                console.log(level)
                ingresarMasmorra()
            }
        }
        console.log(level)
    }
    ingresarMasmorra()

}

// play()