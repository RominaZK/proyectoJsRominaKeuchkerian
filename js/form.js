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
let forms = document.querySelectorAll("form")


// agregar tarea
///eventlisteners
agregar.addEventListener("submit", (evento) => {
    evento.preventDefault()
    let item 
    let newitem = new item(parseInt(item.tarea.id.value), item.tarea.descripcion.value, parseInt(item.tarea.horas.value), parsedate(fechaLimite), checkClik)
    listaTareas.push(newitem)
    newrow(newitem)
    horasTotales()
    listadoUpdate()
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas))
    alert("Tarea agregada!")
})
