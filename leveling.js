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
    let verificarName = String(prompt(`tu nombre es ${$name}? [y/n]`)).toLowerCase
    if(verificarName === "n" || verificarName === "no"){
        $name = String(prompt("Entonces cual e stu nombre?"))

    }
    
    $tipo = String(prompt(`Elige tu tipo de cazador...\n${_cazador}`)).toLowerCase
    switch($tipo){
        case "debil":
            $skills = estadisticas.addEstadisticas(
                200,
                20,
                ["golpe", "patada", "cabezado"]
                )
            break;
        case "mago":
            console.log("si")
            break;
        case "espadachin":
            console.log("si")
            break;
        case "tanque":
            console.log("si")
            break;
        case "asesino":
            console.log("si")
            break;
        default:
            console.log("por favor elige una de las opciones")
            break;
    }
    

}

play()