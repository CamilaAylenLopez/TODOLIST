class Tarea{
    constructor(Titulo, Descripcion, Hora){
        this.Titulo = Titulo
        this.Descripcion = Descripcion
        this.Hora = Hora
        this.Realizado = undefined
    }
    Hora(){
        this.Realizado = new Date()
        this.Tardanza = this.Realizado - this.Hora
    }
}

var item;
var lista = []
const btnEnviar = document.querySelector("#mainbutton")

//element.setAttribute(atributo, valor)
const AñadirItem = (items) =>{
    var items = document.getElementById(item)
    lista.push(items)
    for (var i = 0; i < lista.length; i++) {
        document.getElementById("tarea").innerHTML = lista;
        document.createElement("tarea");
    }
}



const añadirItem = () => {
    lista.push(items)
}