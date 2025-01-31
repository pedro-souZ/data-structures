//coleção não ordenada de itens, não permite valores duplicados

//criando classe Set
class Set {
  constructor() {
    this.items = {};
  }

  // método Has, verifica se o elemento já está no conjunto
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element); // devolve um booleano se o objeto tem a propriedade especificada
  }

  //método add
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true; // devolve true pra informar que foi adicionado
    }
    return false; // retorna false se o elemento já estiver
  }

  //método delete
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true; // informa que foi deletado
    }
    return false;
  }

  // remove todos os valores
  clear() {
    this.items = {};
  }

  // método pra ver o tamanho - há 3 maneiras de fazer...
  size() {
    return Object.keys(this.items).length; // {1}
  }

  values() {
    return Object.values(this.items);
  }
}

const set = new Set();
set.add(1);
console.log(set.values()); // exibe [1]
console.log(set.has(1)); // exibe true
console.log(set.size()); // exibe 1
set.add(2);
console.log(set.values()); // exibe [1, 2]
console.log(set.has(2)); // true
console.log(set.size()); // 2
set.delete(1);
console.log(set.values()); // exibe [2]
set.delete(2);
console.log(set.values()); // exibe []
