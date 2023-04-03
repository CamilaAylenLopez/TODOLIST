class Tarea {
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
}

var item;
const tareas = []

const AñadirItem = () => {
    var tareaInput = document.getElementById("titulo").value;
    var descripcionInput = document.getElementById("Descripcion").value;
    if (tareaInput && descripcionInput) {
        tareas.push({ tarea: tareaInput, descripcion: descripcionInput, tiempodecreacion: Date.now(), tiempodefinalizacion: undefined });
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
        checkbox.onclick = function () { marcarHecha(this); };
        li.appendChild(checkbox);
        var labelito = document.createElement("label");
        labelito.innerHTML = tareas[i].tarea + ": " + tareas[i].descripcion
        li.appendChild(labelito)
        lista.appendChild(li);
    }
}

function marcarHecha(checkbox) {
    var tarea = checkbox.nextSibling;
    tareas.tiempodefinalizacion = Date.now() //de alguna forma tiene que saber en que lugar esta la tarea para poder completar el campo de tiempodefinalizacion
    if (checkbox.checked) {
        tarea.style.textDecoration = "line-through";
    } else {
        tarea.style.textDecoration = "none";
    }
}

function tareaMasRapida() {
    var tareaMasRapida = 0;
    for (var i = 0; i < tareas.length; i++) {
        //el tiempodefinalizacion no esta definido
        var tiempoquesetardoenrealizarlatarea = tareas[i].tiempodefinalizacion - tareas[i].tiempodecreacion
        if (tiempoquesetardoenrealizarlatarea < tareaMasRapida) {
            tareaMasRapida = tareas[i].Titulo;
        }
    }
    if (tareaMasRapida != 0) {
        alert("La tarea más rápida fue: " + tareaMasRapida);
    } else {
        alert("No hay tareas realizadas");
    }
    console.log(tareas.tiempodecreacion)
    //console.log(tareas.tiempo)
}