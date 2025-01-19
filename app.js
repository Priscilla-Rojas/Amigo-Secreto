// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let inputNombre = document.getElementById('amigo');
  let nombre = inputNombre.value.trim();
  if (nombre.length) {
    amigos.push(nombre);
    actualizarLista(amigos)
  } else {
    alert('Por favor, inserte un nombre.');
  };
  inputNombre.value = '';
} 

function actualizarLista(listaAmigos) {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  for (const element of listaAmigos) {
    let li = document.createElement('li');
    li.innerHTML= element;
    lista.appendChild(li);
  }
}

function sortearAmigo(){
  if (!amigos.length) {
    alert('La lista de amigos esta vacia. Agregue los nombres de sus amigos');
    return
  }
  let cantidadAmigos = amigos.length
  let numero = Math.floor(Math.random()*cantidadAmigos);
  
  let contenedorResultado = document.getElementById('resultado');
  contenedorResultado.innerHTML = '';
  let li = document.createElement('li');  
  li.textContent = amigos[numero];
  contenedorResultado.appendChild(li);
}
