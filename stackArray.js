// Pilha -> coleção ordenada de itens que obedece o princípio LIFO (Last In First Out, o último a entrar é o primeiro a sair)
// Final da pilha é o topo e o lado oposto é a base

// Criando uma classe Stack baseada em array
class Stack {
  constructor() {
    this.items = []; // estrutura de dados para armazenar os elementos da pilha
  }
  push(element) {
    this.items.push(element); // método responsável por adicionar novos itens a pilha
  }

  pop() {
    return this.items.pop(); // método responsável pela remoção de itens da pilha
  }

  peek() {
    return this.items[this.items.length - 1]; // método que devolve o item que está no topo da pilha/o último item adicionado
  }

  isEmpty() {
    return this.items.length === 0; // método que verifica se a pilha esta vazia
  }

  size() {
    return this.items.length; // método pra mostrar o tamanho da pilha
  }

  clear() {
    this.items = []; // método para esvaziar a pilha
  }
}

// usando a classe Stack
//Instanciar primeiro
const stack = new Stack();
console.log(stack.isEmpty()); // verificando se está vazia

// adicionando itens
stack.push(5);
stack.push(10);

console.log(stack.peek()); // exibe o 10, pois foi o último item adicionado

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.pop();
stack.pop();
console.log(stack.size());
