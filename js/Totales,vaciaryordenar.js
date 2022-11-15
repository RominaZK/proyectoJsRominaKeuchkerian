const vaciar = document.getElementById("vaciar")
const ordenar = document.getElementById("ordenar")
const total= document.getElementById("total")

function limpiarFormulario() {
    document.getElementById("form").reset();

}
function horasTotales(){
    total.innerText = listaTareas.reduce(
    (suma,tarea) =>  suma + tarea.horas ,0)
    }
    /* vaciamos lista */
vaciar.onclick = () => {
    listaTareas = []
    ///lista.length = 0
    listadoUpdate()
    localStorage.setItem("listaTareas",JSON.stringify(listaTareas));
}
/* actualizar lista */
function listadoUpdate() {
    tabla.innerHTML = ""
    listaTareas.forEach((tarea) => 
    {
        newrow(tarea)
    })
    horasTotales()
}