/* variables*/
let nombre
let proposito
let tipoTarea = "Que tipo de tareas son?\n"
tipoTarea += "1.Trabajo\n"
tipoTarea += "2.Domesticas\n"
tipoTarea += "3.Personales\n"
tipoTarea += "4.Otro\n"
tipoTarea += "5.Salir\n"
tipoTarea += "Ingrese un tipo de tarea\n\n"
let cantidad
let opcion
let otraTarea
let cantTareas


//Pedimos datos del usuario
nombre = prompt("Cuál es tu nombre?")
console.log("Bienvenido/a" + " " + nombre)
alert("Bienvenido/a" + " " + nombre)
document.write("<h1>Bienvenido/a" + " " + nombre + " " + "a tu organizador personal</h1>")
proposito = prompt("Quieres hacer una lista de tareas?")

/*Condicionales*/
//Para realizar o  no la tarea
if (proposito == "si") {
    alert(nombre + " " + "hagamos esa lista")
    /*Ciclo*/
    //Menu de tipo de tareas
    do {
        opcion = parseInt(prompt(tipoTarea))
        switch (opcion) {
            case 1:
                document.write("<h2>Tareas laborales pendientes</h2>")
                break;
            case 2:
                document.write("<h2>Tareas démesticas pendientes</h2>")
                break;
            case 3:
                document.write("<h2>Tareas personales pendientes</h2>")
                break;
            case 4:
                otraTarea = prompt("Que tipo de tarea será?")
                document.write("<h2>Tareas de" + " " + otraTarea + " " + "pendientes </h2>")
                break;
            case 5:
                break;
            default:
                alert("Puedes definir el tipo de tarea luego")
                break;
        }
    } while (opcion >= 5)
}if (proposito !== "si") {
    alert(nombre + " " + "dejemos esa lista para luego")
}

/*Funciones*/
/* Cargar tareas con prompt

function cargarListaTareas(listaTareas) {

    let item
    let continuar

    do {
        item = cargarUnaTarea()
        listaTareas.push(item)
        continuar = prompt("desea continuar cargando tareas? si/no")
    } while (continuar == 'si')
}

function cargarUnaTarea() {

    let item = new tarea()
    item.id = prompt("Ingrese un numero de tarea")
    item.descripcion = prompt("Ingrese la descripción de esta tarea")
    item.fechaLimite = new Date(prompt("ingrese la fecha límite para hacer la tarea (mes día,año)"))
    item.fechaHoy = new Date()
    item.dias = fechaLimite - fechaHoy
    item.horas = parseInt(prompt("Ingrese la cantidad de horas que insume la tarea"))

    return item
}

function mostrarListaTareas(listaTareas) {
    for (let item of listaTareas) {
        console.log("id: " + item.id + "\n" +
            "Descripción: " + item.descripcion + "\n" +
            "Fecha_límite: " + item.fechaLimite + "\n" +
            "Días_restantes" + item.dias + "\n" +
            "Horas:" + item.horas + "\n")
    }
}

cargarUnaTarea(listaTareas)
mostrarListaTareas(listaTareas)
console.log(listaTareas)


function buscarTarea(listaTareas, fechaLimite) {
    let tareaFecha = listaTareas.find((item) => {
        return item.fechaLimite == fechaLimite;
    })
    return tareaFecha;
}
buscarTarea(listaTareas, fechaLimite)*/
