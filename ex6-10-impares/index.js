const list = [];
for (let i = 0; i < 10; ++i) {
  list.push(+prompt("Digite um numero"));
}

const newList = [];

list.forEach((item) => {
  if (item % 2 !== 0) {
    newList.push(item);
  }
});

confirm(`São ímpares os números ${newList.join(" ")}`);
