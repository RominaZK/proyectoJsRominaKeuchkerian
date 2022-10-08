/* variables*/
let nombre
let proposito
let tipoTarea = "Que tipo de tareas son?\n"
tipoTarea += "1.Trabajo\n"
tipoTarea += "2.Domesticas\n"
tipoTarea += "3.Personales\n"
tipoTarea += "4.Otro\n"
tipoTarea += "5.Salir\n"
tipoTarea += "Ingrese un tipo de tarea, luego presione 5 para salir\n\n"
let cantidad
let opcion
let otraTarea
let cantTareas

//Pedimos datos del usuario
nombre = prompt("Cuál es tu nombre?")
console.log(nombre)
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
    } while (opcion >=5)

    /*Funciones*/
    
    //Definir cantidad de solicitudes de ingreso de tarea
    cantTareas = parseInt(prompt("Cuantas tareas desea ingresar?"))
    console.log(cantTareas)
    
    //Para escribir en el documento todas las tareas ingresadas
    function listaTareas() {
        //Solicitar el ingreso de tareas, la cantidad que se definio anteriormente
        for (let i = 1; i <= cantTareas; i++) {
            let tarea = prompt("ingresar la tarea" + " " + i)
            document.write("<h3>" + i + "-" + tarea + "</h3>")
        }
    }
    listaTareas()
}
if (proposito !== "si") {
    alert(nombre + " " + "dejemos esa lista para luego")
}