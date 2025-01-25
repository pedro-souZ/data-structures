// deque (fila de duas pontas - double-ended queue), permite inserir e remover elementos do final ou da frente da fila
// implementa os princípios FIFO e LIFO

// // criando classe Deque

class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  //esse método adiciona um novo elemento na frente do deque.
  addFront(item) {
    if (this.isEmpty()) {
      this.addBack(item);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = item;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.items[0] = item;
    }
  }

  //esse método adiciona um novo elemento no fim do deque (a mesma implementação do método enqueue da classe Queue).
  addBack(item) {
    this.items[this.count] = item;
    this.count++;
  }

  //esse método remove o primeiro elemento do deque (a mesma implementação do método dequeue da classe Queue).
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.items[this.lowestCount]; // armazena o valor da frente da fila
    delete this.items[this.lowestCount]; // deleta o elemento
    this.lowestCount++; // incrementa mais 1 que será o próximo a ser deletado
    if (this.isEmpty()) {
      this.lowestCount = 0;
      this.count = 0;
    }
    return item;
  }

  //esse método remove o último elemento do deque (a mesma implementação do método pop da classe Stack).
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--; //se a pilha não estiver vazia, decremento a propriedade count
    const item = this.items[this.count]; // e armazeno o valor do topo da pilha pra que consiga devolver
    delete this.items[this.count]; // removendo o item
    if (this.isEmpty()) {
      this.lowestCount = 0;
      this.count = 0;
    }
    return item;
  }

  //esse método devolve o primeiro elemento do deque (a mesma implementação do método peek da classe Queue).
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  //esse método devolve o último elemento do deque (a mesma implementação do método peek da classe Stack).
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[this.lowestCount]}`;
    /*Na classe Stack, começo a iterar pelos valores dos itens a partir do índice zero,
    como o primeiro índice da classe Queue pode não ser zero, então intero a partir do índice lowestCount.*/
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }

  isEmpty() {
    return this.lowestCount === this.count;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }
}
const deque = new Deque();

console.log(deque.isEmpty()); // exibe true

deque.addBack("Bolo");
deque.addBack("Maçã");

console.log(deque.toString()); // Bolo,Maçã

deque.addBack("Amora");

console.log(deque.toString()); // Bolo,Maçã,Amora
console.log(deque.size()); // exibe 3
console.log(deque.isEmpty()); // exibe false

deque.removeFront(); // remove Bolo

console.log(deque.toString()); // Maçã,Amora

deque.removeBack(); // Amora sai

console.log(deque.toString()); // Maçã

deque.addFront("Bolo"); // Bolo retorna

console.log(deque.toString()); // Bolo,Maçã

console.log(deque);
