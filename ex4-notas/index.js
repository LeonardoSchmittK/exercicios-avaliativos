const notas = [];
for (let i = 0; i < 5; ++i) {
  const nome = prompt("Digite o aluno " + (i + 1));
  let nota = +prompt("Digite a nota de " + nome);

  while (nota < 0 || nota > 10 || !nota) {
    nota = +prompt("Digite a nota de " + nome);
  }

  notas.push(nota);
}

const notasAcimaDe5 = [];

for (let i = 0; i < notas.length; ++i) {
  if (notas[i] > 5) {
    notasAcimaDe5.push(notas[i]);
  }
}

console.log(notasAcimaDe5);
let soma = 0;

for (let i = 0; i < notasAcimaDe5.length; ++i) {
  soma += notasAcimaDe5[i];
}

const quantidadeNotasAcimaDe5 = notasAcimaDe5.length;

const mediaAcimaDe5 = soma / quantidadeNotasAcimaDe5;

confirm(`A média das notas acima de 5 é ${mediaAcimaDe5}\n`);
