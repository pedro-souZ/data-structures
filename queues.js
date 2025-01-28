// Filas (Queues) coleção ordenada de itens baseada em FIFO (First In First Out, o primeiro que entra é o primeiro a sair)
// a adição de um item na fila é feita pela cauda (tail) e a remoção, na frente

// criando classe Queue
class Queue {
  constructor() {
    this.count = 0; // ajuda a controlar o tamanho da fila
    this.lowestCount = 0; // ajuda a controlar o primeiro elemento da fila para remoção
    this.items = {}; // estrutura para armazenar os elementos da Fila. (posso usar array também), mas com objeto fica mais eficiente de acessar os elementos
  }

  enqueue(element) {
    // método responsável pela adição de novos elementos
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    // método responsável pela remoção do item (utilizando o princípio FIFO)
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]; // armazena o valor da frente da fila / recebe o valor que esta em lowestCount
    delete this.items[this.lowestCount]; // deleta o elemento na posição indicada/ indice lowestCount
    this.lowestCount++; // incrementa mais 1 que será o próximo indice
    return result; // retorna o item que foi removido da fila
  }

  // olhando elemento que esta na frente da fila
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  // verifica se está vazia
  isEmpty() {
    return this.count - this.lowestCount === 0;

    /* isEmpty() {
     return this.size() ===0 }  também funciona */
  }

  // verifica o tamanho - basta calcular a diferença entre as chaves count e lowestCount
  size() {
    return this.count - this.lowestCount;
  }

  // limpando a fila, posso chamar o método dequeue até devolver undefined ou posso reiniciar os valores
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  // criando toString
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
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("Patolino");
queue.enqueue("Pernalonga");

console.log(queue.toString());
console.log(queue.isEmpty());

queue.enqueue("Frajola");

console.log(queue.size());

queue.dequeue(); // remove Patolino
console.log(queue.toString());
