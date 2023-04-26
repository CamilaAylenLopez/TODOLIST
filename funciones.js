
var item;
const tareas = [];
var idTareas = 0

const añadirItem = () => {
    var tareaInput = document.getElementById("titulo").value;
    var descripcionInput = document.getElementById("Descripcion").value;
    if (tareaInput && descripcionInput) {
        let date = new Date()
        tareas.push({
            id: idTareas, 
            tarea: tareaInput, 
            descripcion: descripcionInput, 
            tiempodecreacion: date.getTime(), 
            tiempodefinalizacion: -1, 
            estado: 0, 
            tiempoquesetardo: undefined });
        idTareas++
        document.getElementById("titulo").value = "";
        document.getElementById("Descripcion").value = "";
        MostrarItem();
    } else console.log("falta nombre o desc ")
}


const MostrarItem = () => {
    var lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";
    for (let i = 0; i < tareas.length; i++) {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        //checkbox.onclick = function () { marcarHecha(this, i); };//esto esta mal
        checkbox.setAttribute("onclick", `marcarHecha2(${i})`)
        checkbox.setAttribute("id", `check-${i}`)
        li.appendChild(checkbox);
        
        var labelito = document.createElement("label");
        labelito.innerHTML = tareas[i].tarea + ": " + tareas[i].descripcion
        li.appendChild(labelito)
        lista.appendChild(li);
    }
}
function marcarHecha2(id){
    let check = document.getElementById(`check-${id}`)
    marcarHecha(check, id)
}

function marcarHecha(checkbox, id) {
    var tarea = checkbox.nextSibling;
    tareas.indexOf(id)
    let date = new Date()
    tareas[id].tiempodefinalizacion = date.getTime();
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
    let idMasRapida = -1
    let tareaMasRapida = -1
    for (let i = 0; i < tareas.length; i++) {
        if(tareas[i].tiempodefinalizacion != -1) {
            if (tareas[i].tiempodefinalizacion - tareas[i].tiempodecreacion > tareaMasRapida){
                tareaMasRapida = tareas[i].tiempodefinalizacion - tareas[i].tiempodecreacion
                idMasRapida = tareas[i].id
            }
        }
    }
    if (idMasRapida == -1) alert("ninguna tarea fue completada")
    else alert("la tarea mas rapida fue: " + tareas[idMasRapida].tarea + "; El tiempo que tardo fue: " + tareaMasRapida + " segundos")

}