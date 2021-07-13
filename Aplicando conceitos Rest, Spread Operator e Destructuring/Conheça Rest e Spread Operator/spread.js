/* 
Sintaxe de Espalhamento (Spread syntax) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido 
para ser usado onde zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados, ou que um 
objeto seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados.
*/

const multiply = (...args) => {
    return args.reduce((acc, value) => acc * value, 1);
}

const sum = (...rest) => {
    return multiply.apply(undefined, rest);
}

console.log(sum(5, 5, 5, 2, 3));


// =======================
// =======================


// Spread operator (...)

const multiply = (...args) => {
    return args.reduce((acc, value) => acc * value, 1);
}

const sum = (...spread) => {
    return multiply(...spread); // pega todos os itens de array e transforma em parâmetros
}

console.log(sum(5, 5, 5, 2, 3));


// =======================
// =======================


// Podemos usar o spread com strings, arrays, literal objects e objetos iteráveis 

const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str); // quebra cada letra e transforma tudo em um array

/* 
Output

[
  'D', 'i', 'g', 'i', 't',
  'a', 'l', ' ', 'I', 'n',
  'n', 'o', 'v', 'a', 't',
  'i', 'o', 'n', ' ', 'O',
  'n', 'e'
]
*/


// =======================
// =======================


// Podemos usar o spread com strings, arrays, literal objects e objetos iteráveis 

const arr = [1, 2, 3, 4, 5, 6];

function logArgs(...args) {
    console.log(args); // cada item do array vira um argumento da função
}

logArgs(...arr); 


const arr = [1, 2, 3, 4, 5, 6];

function logArgs(a, b, c) {
    console.log(a, b, c); 
}

logArgs(...arr); 


// =======================
// =======================


const arr = [1, 2, 3, 4, 5, 6];

// const arr2 = arr.concat([7, 8, 9, 10]);
const arr2 = [...arr, 7, 8, 9, 10]; // com o spread podemos passar todos os elementos do nosso array de uma vez, isso funciona como na linha anterior, onde usamos o concat
console.log(arr2);

/*
Output

[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/


// =======================
// =======================


const obj = {
    test: 123
}

const obj2 = {
    ...obj,    // aqui pegamos todas as props do obj e passamos para o obj2
    test2: 456 // aqui ainda criamos mais uma prop no obj 2
               // obs: se colocarmos ali test: 456 iremos sobrescrever a prop, o output ficaria assim por exemplo { test: 456 }
}

console.log(obj); // output { test: 123 }
console.log(obj2); // output { test: 123, test2: 456 }