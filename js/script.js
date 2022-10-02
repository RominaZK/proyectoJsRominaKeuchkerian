
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
    let tarea1= parseInt(prompt("ingresar la tarea 1"))
    let tarea2= parseInt(prompt("ingresar la tarea 2"))
    let tarea3= parseInt(prompt("ingresar la tarea 3"))
    let tarea4= parseInt(prompt("ingresar la tarea 4"))
    let tarea5= parseInt(prompt("ingresar la tarea 5"))
    function cantidadTareas(tarea1,tarea2,tarea3, tarea4, tarea5) {
        let resultado= tarea1 + tarea2 + tarea3 + tarea4 + tarea5
        return resultado
    }
    alert(resultado)
}

if (proposito !== "si") {
    alert (nombre + " " + "dejemos esa lista para luego")
}

