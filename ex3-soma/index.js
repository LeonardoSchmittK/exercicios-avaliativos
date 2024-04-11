const lista = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < lista.length; ++i) {
  soma += lista[i];
}

console.log(`A soma dos números ${lista.join(", ")} é ${soma}\n`);
