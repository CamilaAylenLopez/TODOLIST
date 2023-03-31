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
let lista = []
const btnEnviar = document.querySelector("#mainbutton")

//element.setAttribute(atributo, valor)
const AñadirItem = () =>{
    let items = document.getElementById("Titulo")
    lista.push(items)
    console.log(lista[0])
    for (var i = 0; i < lista.length; i++) {
        document.getElementById("tareas").innerHTML = lista[i];
        //document.createElement("tarea");
    }
}