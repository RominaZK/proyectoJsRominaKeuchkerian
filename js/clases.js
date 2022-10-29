/*Clases*/

class tarea {

    id
    descripcion
    fechaLimite
    fechaHoy
    dias
    horas

    constructor(id, descripcion, fechaLimite, fechaHoy, dias, horas) {
        this.id = id
        this.descripcion = descripcion
        this.fechaLimite = fechaLimite
        this.fechaHoy = new Date()
        this.dias = dias
        this.horas = horas
        
    }
}