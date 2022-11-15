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


// agregar tarea
///eventlisteners
forms.addEventListener("submit", (e) => {
    e.preventDefault()
    let newitem = new tarea(parseInt(id), descripcion, Date.parse(fechaLimite), dias, parseInt(horas))
    listaTareas.push(newitem)
    newrow(newitem)
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas))
    alert("Tarea agregada!")
    horasTotales()
    listadoUpdate()
    limpiarFormulario()
})
