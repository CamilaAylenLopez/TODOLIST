/*class Tarea {
    constructor(Titulo, Descripcion, Hora) {
        this.Titulo = Titulo
        this.Descripcion = Descripcion
        this.Hora = Hora
        this.Realizado = undefined
    }
    Hora() {
        this.Realizado = new Date()
        this.Tardanza = this.Realizado - this.Hora
    }
}*/

var item;
var tareas = [];

const AñadirItem = () => {
    var tareaInput = document.getElementById("titulo").value;
    var descripcionInput = document.getElementById("Descripcion").value;
    if (tareaInput && descripcionInput) {
        tareas.push({ tarea: tareaInput, descripcion: descripcionInput, tiempodecreacion: Date.now(), estado: 0, tiempodefinalizacion: undefined, tiempoquesetardo: undefined });
        MostrarItem();
        document.getElementById("titulo").value = "";
        document.getElementById("Descripcion").value = "";
    }
}


const MostrarItem = () => {
    var lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";
    for (var i = 0; i < tareas.length; i++) {
        /*var tarea = tareas[i].tarea;
        var descripcion = tareas[i].descripcion;*/

        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function () { marcarHecha(this, i); };//esto esta mal
        li.appendChild(checkbox);
        
        var labelito = document.createElement("label");
        labelito.innerHTML = tareas[i].tarea + ": " + tareas[i].descripcion
        li.appendChild(labelito)
        lista.appendChild(li);
    }
}

function marcarHecha(checkbox, id) {
    var tarea = checkbox.nextSibling;
    tareas.indexOf(id)
    tareas[id].tiempodefinalizacion = Date.now();
    
    if (checkbox.checked) {
        tareas[id].estado = 1
        tarea.style.textDecoration = "line-through";
    } 
    else{
        tareas[id].estado = 0
        tarea.style.textDecoration = "none";
    }

}

function tareaMasRapida() {
    var tareaMasRapida;
    var mejortiempo = null;
    for (var i = 0; i < tareas.length; i++) {
        if (tareas[i].estado == 1) {
            tareas[i].tiempoquesetardo = tareas[i].tiempodefinalizacion - tareas[i].tiempodecreacion
            if (tareas[i].tiempoquesetardo > mejortiempo) {
                tareaMasRapida = tareas[i].Titulo;
                mejortiempo = tareas[i].tiempoquesetardo
            }
        }

    }
    if (mejortiempo != null) {
        alert("La tarea más rápida fue: " + tareaMasRapida +
            " Se tardo:" + mejortiempo);
    } else {
        alert("No hay tareas realizadas");
    }
    console.log(tareas.tiempodecreacion)
    //console.log(tareas.tiempo)
}