
/*Objeto*/
let listaTareas = []
const item = new tarea ()
const tabla = document.getElementById("items")

function newrow(tarea) {
    let row = document.createElement("tr")
    let pos = listaTareas.indexOf(tarea)

    let celda = document.createElement("td")
    celda.innerText = tarea.id
    row.append(celda)

    celda = document.createElement("td")
    celda.innerText = tarea.descripcion
    row.append(celda)

    celda = document.createElement("td")
    celda.innerText = tarea.fechaLimite
    row.append(celda)

    celda = document.createElement("td")
    celda.innerText = tarea.dias
    row.append(celda)



    celda = document.createElement("td")
    celda.innerText = tarea.horas
    row.append(celda)

    ///Agrego boton check
    let botonCheck = document.createElement("input")
    botonCheckclassName = "checkbox"
    botonCheck.type = "checkbox"
    botonCheck.id = "check"
    botonCheck.innerText = "Hecho"

    //Marcar como tarea hecha y en días restantes marcar cero
    botonCheck.onclick = () =>
        listaTareas[pos].estado
        localStorage.setItem("listaTareas", JSON.stringify(listaTareas))

    celda = document.createElement("td")
    celda.innerText = tarea.estado
    celda.append(botonCheck)
    row.append(celda)


    ///Agrego boton eliminar
    let botonEliminar=document.createElement('botton')
    botonEliminar.className= "btn btn-primary"
    botonEliminar.innerText = "Eliminar";
    
    botonEliminar.onclick = () => {
        listaTareas.splice(pos,1); ///elimina el objeto en la posicion pos del carrito
        listadoUpdate(); //vuelvo a generar los elementos del DOM
        localStorage.setItem("listaTareas",JSON.stringify(listaTareas));
} 
celda = document.createElement("td");
    celda.append(botonEliminar);
    row.append(celda);
    tabla.append(row);
}


/* actualizar lista */
function listadoUpdate() {
    tabla.innerHTML = "";
    listaTareas.forEach((tarea) => 
    {
        newrow(tarea);
    });
    horasTotales();
}

function checkboxClick(event) {
    let mensaje = "hecho";
    document.getElementById("check").innerHTML += mensaje;
    event.preventDefault();
}

/* vaciar form*/
function limpiarFormulario() {
    document.getElementById("form").reset();

}