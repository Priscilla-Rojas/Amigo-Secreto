// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let input = document.getElementById('amigo');
  let nombre = input.value.trim();
  if (nombre.length) {
    amigos.push(nombre);
    actualizarLista(amigos)
  } else {
    alert('Por favor, inserte un nombre.');
  };
  input.value = '';
  console.log(nombre)
} 

function actualizarLista(listaAmigos) {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  for (const element of listaAmigos) {
    let li = document.createElement('li');
    li.innerHTML= element;
    lista.appendChild(li);
    console.log(amigos)
  }
}
