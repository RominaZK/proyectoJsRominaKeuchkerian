/*Clases*/

class tarea {

    id
    descripcion
    horas
    fechaLimite
    fechaHoy
    diasRestantes
    

    constructor(id, descripcion, horas, fechaLimite) {
        this.id = id
        this.descripcion = descripcion
        this.horas = horas
        this.fechaLimite = fechaLimite
        
    
    }
    get fechaHoy() {
        return new Date (año,mes,dia)
    }
    
    set fechaHoy(newfecha) {
        this.fechaHoy = newfecha;
    }
    get diasRestantes(){
        return this.fechaLimite-fechaHoy
    }
    set diasRestantes(dias){
        this.diasRestantes = dias
    }
    
}