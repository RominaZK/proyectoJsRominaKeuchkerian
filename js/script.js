/*Objeto*/
let listaTareas = []
const item = new tarea()
const tabla = document.getElementById("items")
const vaciar = document.getElementById("vaciar")
const ordenar = document.getElementById("ordenar")
const total = document.getElementById("total")

///elementos del dom
///form 
let id = document.getElementById("id")
let descripcion = document.getElementById("tarea")
let horas = document.getElementById("horas")
let fechaLimite = document.getElementById("fechaLimite")

///botones
const agregar = document.querySelector("#agregar")
let checkClik = document.getElementById("checkClick")


///todos los forms
const forms = document.querySelector("#form")


///Función nueva fila

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
    let botonEliminar = document.createElement('botton')
    botonEliminar.className = "btn btn-primary"
    botonEliminar.innerText = "Eliminar";

    botonEliminar.onclick = () => {
        listaTareas.splice(pos, 1); ///elimina el objeto en la posicion pos del carrito
        listadoUpdate(); //vuelvo a generar los elementos del DOM
        localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
    }
    celda = document.createElement("td");
    celda.append(botonEliminar);
    row.append(celda);
    tabla.append(row);
}

/* actualizar lista */
function listadoUpdate() {
    tabla.innerHTML = "";
    listaTareas.forEach((tarea) => {
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

function limpiarFormulario() {
    document.getElementById("form").reset();

}

function horasTotales() {
    total.innerText = listaTareas.reduce(
        (suma, tarea) => suma + tarea.horas, 0)
}
/* vaciamos lista */
vaciar.onclick = () => {
    listaTareas = []
    ///lista.length = 0
    listadoUpdate()
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
}
/* actualizar lista */
function listadoUpdate() {
    tabla.innerHTML = ""
    listaTareas.forEach((tarea) => {
        newrow(tarea)
    })
    horasTotales()
}



// agregar tarea
///eventlisteners
forms.addEventListener("submit", (e) => {
    e.preventDefault()
    let item = new tarea(parseInt(id), descripcion, parseInt(horas), Date.parse(fechaLimite), Date.parse(fechaHoy), dias)
    listaTareas.push(item)
    newrow(item)
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas))
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '"Tarea agregadacon exito!"',
        showConfirmButton: false,
        timer: 1500
    })
    horasTotales()
    listadoUpdate()
    limpiarFormulario()
})

///Agregando API
let calendar = document.getElementById("calendar")
const fecha = document.getElementById("fechaLimite")

calendar.onclick = (e) => {
    e.preventDefault();
    let evento = fecha.value;

    const nuevoEvento = new Agendar();
    nuevoEvento.append("q", evento);
    nuevoEvento.append("target", "es");
    calculodias.append("source", "en");


    const options = {
        method: 'POST',
        headers: {
            Token: 'undefined',
            'X-RapidAPI-Key': '71a08789c3msh7edd88a371ba29ap189c5cjsn0d5c24e24c19',
            'X-RapidAPI-Host': 'pinke01-31events-auth.p.rapidapi.com'
        }
    };

    fetch('https://pinke01-31events-auth.p.rapidapi.com/event', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
}