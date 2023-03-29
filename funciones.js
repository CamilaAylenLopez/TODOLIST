var item;
var lista = [""]

//element.setAttribute(atributo, valor)

function AñadirItem(items) {
    var items = document.getElementById(item)
    lista.push(items)
    for (var i = 0; i < lista.length; i++) {
        document.getElementById("tarea").innerHTML = lista;
        document.createElement("tarea");
    }
}



const el = document.querySelector("#mainbutton");

function tasklist() {
  let item = document.getElementById('MainInput').value;
  let text = document.createTextNode(item);
  var checkboxmaker = document.createElement('input');
  let newTask = document.createElement("p");
  checkboxmaker.type = "checkbox";
  checkboxmaker.name = "name";
  checkboxmaker.value = "value";
  checkboxmaker.id = "id"
  newTask.appendChild(checkboxmaker);
  checkboxmaker.classList = "corrected"
  newTask.appendChild(text);
  document.getElementById("MainUl").appendChild(newTask);
}

el.addEventListener("click", tasklist);

function markdone(e) {
  if (e.target.type == "checkbox") {
    e.target.parentNode.classList.toggle("donete")
  }
}

MainUl.addEventListener("click", function(e) {
  markdone(e)
})