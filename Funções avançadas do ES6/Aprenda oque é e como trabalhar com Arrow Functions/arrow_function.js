// Arrow Functions (são funções anônimas também)

/*
var hello = () => {
  return "Hello World!";
};

hello = nome da função/var
() = parâmetros
=> {} = escopo da função
*/

var sum1 = (a, b) => {
  return a + b;
};

console.log(sum1(3, 3));

// =======================

var sum2 = (a, b) => a + b; // podemos omitir o return nesse caso, mas so no caso em que o return é uma simples expressão

console.log(sum1(4, 4));

// =======================

var sum3 = a => a + 5; // caso eu tenha apenas 1 argumento não é necessário usar os ()

console.log(sum3(5));

// =======================

var returnObj = () => ({ teste: '123' }); // caso eu queira declarar um objeto no return da função eu uso ({})

console.log(returnObj());

// =======================

var obj = {
  showContext: function showContext() {
    this.log('teste'); // referencia o próprio objeto

    setTimeout(function () {
      this.log('after 1000ms');
      console.log(this);
    }.bind(this), 1000);
  },

  log: function log(value) {
    console.log(value);
  }
};

obj.showContext();

var obj2 = {
  showContext2: function showContext2() {
    this.log2('teste'); // referencia o próprio objeto

    // this = obj2
    setTimeout(() => {
      this.log2('after 1000ms');
    }, 1000);
  },

  log2: function log2(value) {
    console.log(value);
  }
};

obj2.showContext2();

// OBSERVAÇÕES
// Arrow Functions não podem ser construtoras
// Arrow Functions não tem hoisting igual as funções normais