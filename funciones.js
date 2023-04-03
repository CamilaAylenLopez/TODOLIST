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
const listados = []
const btnEnviar = document.querySelector("#mainbutton")

//element.setAttribute(atributo, valor)
const AñadirItem = () => {
    /*let items = document.getElementById("Titulo")
    let descrip = document.getElementById("Descripcion")
    lista.push(items.value)
    listados.push(descrip.value)*/

    var tareaInput = document.getElementById("titulo").value;
    var descripcionInput = document.getElementById("Descripcion").value;
    if (tareaInput && descripcionInput) {
        tareas.push({ tarea: tareaInput, descripcion: descripcionInput, tiempo: Date.now() });
        MostrarItem();
        document.getElementById("titulo").value = "";
        document.getElementById("Descripcion").value = "";
    }

}


const MostrarItem = () => {
    /*for (var i = 0; i < lista.length; i++) {
        document.getElementById("tareas").innerHTML = lista[i];
        document.getElementById("descripciones").innerHTML = listados[i];
        //document.createElement("tarea");
    }
    //document.getElementById("tareas").innerHTML = lista;
    var newDiv = document.createElement("ul");
    var newContent = document.textContent(lista);
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("tareas");
    document.body.insertBefore(newDiv, currentDiv);

    console.log(lista)*/
    var lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";
    for (var i = 0; i < tareas.length; i++) {
        var tarea = tareas[i].tarea;
        var descripcion = tareas[i].descripcion;
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function () { marcarHecha(this); };
        li.appendChild(checkbox);
        var labelito = document.createElement("label");
        labelito.innerHTML = tarea + ": " + descripcion
        li.appendChild(labelito)
        lista.appendChild(li);
    }

    console.log(tareas)
}

function marcarHecha(checkbox) {
    var tarea = checkbox.nextSibling;
    console.log(tarea)

    if (checkbox.checked) {
        tarea.style.textDecoration = "line-through";
    } else {
        tarea.style.textDecoration = "none";
    }
    
}

function tareaMasRapida() {
    var tareaMasRapida = null;
    for (var i = 0; i < tareas.length; i++) {
        var tarea = tareas[i];
        if (!tareaMasRapida || tarea.tiempo < tareaMasRapida.tiempo) {
            tareaMasRapida = tarea;
        }
    }
    if (tareaMasRapida) {
        alert("La tarea más rápida fue: " + tareaMasRapida.tarea);
    } else {
        alert("No hay tareas realizadas");
    }
    console.log(tareas.tiempo)
}