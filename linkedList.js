// LinkedList -> uma lista que armazena dados dinamicamente, posso adicionar ou remover itens de qualquer modo e aumentar o tamanho se necessário

// criando uma linked list

// para representar a cabeça (head) e outros elementos da linked list, preciso de uma classe auxiliar chamada Node
// essa classe representa o item que quero adicionar na lista
class Node {
  constructor(element) {
    this.element = element; // elemento que quero adicionar na lista (node)
    this.next = undefined; // ponteiro referênciando próximo elemento (próximo nó)
  }
}

class LinkedList {
  constructor() {
    this.count = 0; // propriedade pra auxiliar no tamanho da lista
    this.head = undefined; // faz referencia com o primeiro item da linked list(head)
  }

  // inserindo elementos no fim da lista // posso ter dois cenários (vazio/não vazio)
  push(element) {
    const node = new Node(element); // primeiro instancio o node e passo como parâmetro o elemento que quero adicionar
    let current; // variável que aponta pro nó atual
    if (this.head == null) {
      // aqui é uma situação em que minha lista está vazia
      this.head = node; // como esta vazia, esse vai ser o primeiro node e então ele se torna o Head
    } else {
      // aqui é uma situação em que minha lista já esta com node
      current = this.head; // instanciando o o node (head) pra encontrar outros nodes
      while (current.next != null) {
        // itero sobre minha lista para encontrar o ponteiro vazio
        current = current.next;
      }
      current.next = node; // atribuindo o último node vazio ao node que quero adicionar
    }
    this.count++; // incremento o tamanho da lista
  }

  // removendo elementos/ 2 cenários (primeiro é aquele em que removemos o primeiro elemento, e o segundo é aquele em que removemos qualquer elemento que não seja o primeiro.)

  removeAt(index) {
    // remove o nó pelo index
    if (index >= 0 && index < this.count) {
      // verifica se o index é válido

      let current = this.head; //nó atual inicia no head

      if (index === 0) {
        // se for o primeiro elemento
        this.head = current.next; // atualiza o head
      } else {
        let previous; // variável que vai guardar o current escolhido para depois do for ser excluído

        for (let i = 0; i < index; i++) {
          // percorre o indice desejado

          // depois de percorrer até a posição de remoção, a variável current armazena o nó que quero remover
          previous = current; // atualiza o previous para o nó atual
          current = current.next; // move oara o próximo nó
        }

        previous.next = current.next; // faz a ligação de previous com o next de current: pula esse elemento para removê-lo
      }

      this.count--; // diminui o tamanho da lista
      return current.element;
    }
    return undefined;
  }

  // método que retorna o index do nó escolhido
  getElementAt(index) {
    //verificar se o index passado como parâmetro é uma posição válida
    if (index >= 0 && index <= this.count) {
      let node = this.head; // nó atual é atribuido a variável node
      for (let i = 0; i < index && node != null; i++) {
        // iterando a linked list
        node = node.next; // avança para o próximo nó a cada iteração
      }
      return node; // i chega no index e retorna o nó indexado
    }
    return undefined; // se nao existir o index, retorna undefined
  }

  // inserindo elementos em qualquer index
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      // valida o index
      const node = new Node(element);
      if (index === 0) {
        // caso indice seja 0, o elemento node vira o head e o head vira node.next
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1); //percorre até a posição desejada, uma index antes do local em que queremos inserir o novo node.
        const current = previous.next; // referencia um element após a posição em que gostaríamos de inserir o novo elemento.
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  toString() {
    if (this.head == null) {
      // {1}
      return "";
    }
    let objString = `${this.head.element}`; // {2}
    let current = this.head.next; // {3}
    for (let i = 1; i < this.size() && current != null; i++) {
      // {4}
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString; // {5}
  }
  Em;

  size() {
    // método para ver tamanho da linked list
    return this.count;
  }

  isEmpty() {
    // método para retornar se a linked list está vazia
    return this.size() === 0;
  }

  getHead() {
    // método para retornar a cabeça da linked list
    return this.head;
  }
}

const list = new LinkedList();
list.push(15);
list.push(10);
list.push(20);
list.removeAt();

console.log(list);
console.log(list.toString());
