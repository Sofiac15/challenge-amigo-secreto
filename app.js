// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
  document.getElementById("resultado").innerHTML = "";
  let amigoUsuario = document.getElementById("amigo").value;
  if (amigoUsuario === "") {
    alert("Por favor, ingrese un nombre");
  }
  listaAmigos.push(amigoUsuario);
  document.getElementById("amigo").value = "";
  if (listaAmigos.length > 0) {
    limpiarLista();
    agregarListaAlDom();
  }
}

function agregarListaAlDom() {
  let lista = document.getElementById("listaAmigos");
  for (let i = 0; i < listaAmigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = listaAmigos[i];
    lista.appendChild(li);
  }
}

function limpiarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
}

//validar ganador
function sortearAmigo() {
  let posicion = Math.floor(Math.random() * listaAmigos.length);
  let amigoSorteado = listaAmigos[posicion];
  let ganador = document.getElementById("resultado");
  ganador.textContent = amigoSorteado;
  limpiarLista();
  listaAmigos = [];
}
