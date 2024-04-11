const listaDe3Numeros = prompt("Digite três números:\n").split(" ");
listaDe3Numeros.map(Number);
let novaLista = new Array(3);
let index = 0;

for (let i = listaDe3Numeros.length - 1; i >= 0; --i) {
  novaLista[index] = listaDe3Numeros[i];
  index++;
}

console.log(novaLista.map(Number));
