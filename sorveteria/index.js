class Sorvete {
  // array principal!!!
  sabores = [];
  saboresElement = document.querySelector(".sabores");
  toast = document.querySelector(".toast");
  titulo = document.querySelector(".titulo");
  counter = 0;
  sorvete() {}

  addSabor(sabor) {
    if (this.sabores.length < 3) {
      this.sabores = [...this.sabores, sabor];
      this.imprimirSorvete();
    }
  }

  removerSabor(id) {
    this.sabores.splice(id, 1);
    this.imprimirSorvete();
  }

  concluirPedido() {
    if (this.sabores.length <= 0) {
      this.toast.innerHTML = `<p>Adicione pelo menos um sabor!</p>`;
      this.toast.style.display = "block";
    } else {
      this.counter++;
      this.toast.innerHTML = `<p>Bom apetite: ${this.sabores}</p> <span>clique para sair</span>`;
      this.toast.style.display = "block";
      this.sabores = [];
      this.titulo.innerText = `${this.counter} sorvete(s) pedidos!`;
      this.imprimirSorvete();
    }
  }

  imprimirSorvete() {
    const layoutSabor = document.querySelector(".sabores");
    layoutSabor.innerHTML = "";
    this.saboresElement.style.height = 0;
    let newHeight = 0;
    this.sabores.reverse().forEach((sabor, id) => {
      newHeight += 5;
      this.saboresElement.style.height = newHeight + "em";

      const newSaborEl = document.createElement("div");
      newSaborEl.addEventListener("click", () => this.removerSabor(id));
      newSaborEl.className = sabor + "-sabor";
      layoutSabor.appendChild(newSaborEl);
    });
  }
}

const sorvetao = new Sorvete();
