const list = [10, 55, 20, 1];
let maior = list[0];

for (let i = 0; i < list.length; ++i) {
  list[i] > maior && (maior = list[i]);
}

console.log(`O maior número entre os números ${list.join(",")} é o ${maior}`);
