
/*Objeto*/
let listaTareas = []
let item = undefined

//Mostrar lista en el DoM
function mostrarListaDOM(listaTareas) {
    let tabla = document.getElementById("table")
    tabla.innerHTML = ""
    listaTareas.forEach((tarea) => {
        tabla.innerHTML += `
                        <tr>
                            <th> ${tarea.id} </th>
                            <th> ${tarea.descripcion} </th>
                            <th> ${tarea.fechaLimite} </th>
                            <th> ${tarea.dias} </th>
                            <th> ${tarea.horas} </th>
                            <th> ${tarea.estado} </th>
                            <th> ${tarea.horasTotales} </th>
                        </tr>`
    })

}
mostrarListaDOM(listaTareas)

function newrow(tarea) {
    let row = document.createElement("tr")
    let pos = listaTareas.indexOf(tarea)

    let celda = document.createElement("th")
    celda.innerText = tarea.id
    row.append(celda)

    celda = document.createElement("th")
    celda.innerText = tarea.descripcion
    row.append(celda)

    celda = document.createElement("th")
    celda.innerText = tarea.fechaLimite
    row.append(celda)

    celda = document.createElement("th")
    celda.innerText = tarea.dias
    row.append(celda)

    celda = document.createElement("th")
    celda.innerText = tarea.horas
    row.append(celda)

    ///Agrego boton check
    let botonCheck = document.createElement("input")
    botonCheckclassName = "checkbox"
    checkbox.type = "checkbox";
    checkbox.id = "check";
    botonCheck.innerText = "Hecho"

    //Marcar como tarea hecha y en días restantes marcar cero
    botonCheck.onclick = () =>
        listaTareas[pos].estado
        localStorage("listaTareas", JSON.stringify(listaTareas))

    celda = document.createElement("th")
    celda.innerText = tarea.estado
    celda.append(botonCheck)
    row.append(celda)

    tabla.append(row);

} 
function horasTotales(){

    total= document.getElementById("total")
    total.innerText= listaTareas.reduce((suma,tarea) => 
    suma + tarea.horas ,0)
    }



/* actualizar lista */
function listadoUpdate() {
    tabla.innerHTML = "";
    listaTareas.forEach((item) => 
    {
        newRow(item);
    });
    horasTotales();
}

function checkboxClick(event) {
    let mensaje = "hecho";
    document.getElementById("check").innerHTML += mensaje;
    event.preventDefault();
}



