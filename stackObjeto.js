class Stack {
  constructor() {
    this.count = 0; // ajuda a manter o controle do tamanho da pilha
    this.items = {};
  }

  push(element) {
    // como é objeto, a versão do push permite adicionar somente um único item por vez (diferente de quando é array)
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    // a propriedade count funciona também como tamanho da pilha, então basta retornar ela
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      // verifica se a pilha esta vazia
      return undefined;
    }
    this.count--; // se a pilha não estiver vazia, decremento a propriedade count
    const result = this.items[this.count]; // e armazeno o valor do topo da pilha pra que consiga devolver
    delete this.items[this.count]; // removendo o item
    return result; // retorna o item do topo da pilha depois que o outro foi removido
  }

  peek() {
    // vendo o topo da pilha
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  clear() {
    // pra limpar a pilha, é só limpar ela com os mesmos valores usados no constructor
    this.items = {};
    this.count = 0;

    while (!this.isEmpty()) {
      this.pop();
    }
  }

  //criando método toString
  toString() {
    if (this.isEmpty()) {
      return ""; // se a pilha estiver vazia vai devolver uma Sting vazia
    }
    let objString = `${this.items[0]}`; // Se não estiver,inicio a string com o primeiro elemento, que está na base da pilha
    for (let i = 1; i < this.count; i++) {
      // faço uma iteração por todas as chaves da pilha adicionando um vírgula
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(10);
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());
