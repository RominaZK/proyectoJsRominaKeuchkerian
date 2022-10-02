
/* variables*/
let nombre
let proposito
let tipoTarea
let cantidad
let lista



nombre= prompt("ingrese su nombre")
console.log(nombre)
alert("Bienvenido/a"+ " " + nombre)
proposito= prompt("Quieres hacer una lista de tareas?")
if (proposito == "si"){
    tipoTarea= prompt( "De que serán las tareas")
    alert(nombre + " " + "hagamos esa lista")
    function cantidadTareas(tarea1,tarea2,tarea3, tarea4, tarea5) {
        let resultado= parseint (tarea1 + tarea2 + tarea3 + tarea4 + tarea5)
        return resultado
    }
    let tarea1=prompt("ingresar la tarea 1",1)
    let tarea2=prompt("ingresar la tarea 2", 2)
    let tarea3=prompt("ingresar la tarea 3", 3)
    let tarea4=prompt("ingresar la tarea 4", 4)
    let tarea5=prompt("ingresar la tarea 5",5)
    cantidadTareas (tarea1,tarea2,tarea3,tarea4, tarea5)
    alert(resultado)
}

if (tareas !== "si") {
    alert (nombre + " " + "dejemos esa lista para luego")
}

