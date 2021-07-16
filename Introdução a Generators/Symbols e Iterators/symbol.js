// Symbols 
// É uma maneira de gerarmos um identificador único

/*
Explicação MDN

Esse termo do glossário descreve tanto o tipo de dados chamado "symbol", quando a função/classe "Symbol()", que entre outras coisas, cria 
instâncias do tipo de dados symbol.

O tipo de dados "symbol" é qualificado como um primitivo, onde valores desse tipo podem ser usados para fazer propriedades de objetos 
anônimos. Ele pode ser usado como chave de uma propriedade de objeto quando este tem a intenção de ser privada, para uso interno da 
classe ou do tipo do objeto em questão. Como exemplo, chaves do tipo symbol existem em vários objetos internos do JavaScript. Da mesma 
forma, pode-se construir classes que tenham membros privados usando essa técnica. O tipo de dados symbol é de propósito altamente 
especializado, o que o torna pouco versátil; uma instância de Symbol pode ser atribuída à um L-value, e pode ter sua identidade 
examinada, nada mais; nenhuma outra operação poderá ser aplicada, o que contrasta, por exemplo, com uma instância de Number para um 
inteiro cujo valor é 42, que por sua vez tem diversas operações para comparar, combinar com outros tipos de dados, etc.

Um valor do tipo de dados "symbol" pode ser referenciado como um "valor symbol". Em JavaScript, um valor symbol é criado através da 
função Symbol(), que dinamicamente produz um valor único e anônimo. A única utilização sensata para para essa construção é armazená-la em 
uma variável que será utilizada como chave para uma propriedade de objeto cujo objetivo é torná-lo anônimo.
*/

const uniqueId = Symbol();
console.log(uniqueId);

/*
Output:
Symbol()
*/

// UM SYMBOL NUNCA É IGUAL A OUTRO, É UM IDENTIFICADOR ÚNICO


// =======================
// =======================


const uniqueId = Symbol('Hello');
console.log(uniqueId);

/*
Output:
Symbol(Hello)
*/

const uniqueId2 = Symbol('Hello');
console.log(uniqueId2);

/*
Output:
Symbol(Hello)
*/

console.log(uniqueId === uniqueId2);

/*
Output:
false
*/

// Mesmo passando o mesmo valor para ambos os symbols eles mesmo assim não são iguais, por serem identificadores únicos


// =======================
// =======================


const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
}

console.log(obj);

/*
Output:
{ [Symbol(Hello)]: 'Hello' }
*/


// =======================
// =======================


const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
}

console.log(obj);

/*
Output:
{ [Symbol(Hello)]: 'Hello' }
*/

console.log(Object.keys(obj)); 

/*
Output:
[]
*/

// Com o symbols podemos criar praticamente props anônimas que não podem ser vistas pelo Object.keys, mas podemos ver elas como veremos a seguir


// =======================
// =======================


const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
}

console.log(Object.getOwnPropertySymbols(obj));

/*
Output:
[ Symbol(Hello) ]
*/

// Com o Object.getOwnPropertySymbols(obj) conseguimos pegar as props do tipo symbol 

/*
Explicação MDN:

O Object.getOwnPropertySymbols() método retorna uma array com todas propriedades de símbolo encontradas diretamente em um determinado 
objeto dado.

Similar do Object.getOwnPropertyNames(), você pode obter todas as propriedades de símbolo de um objeto dado como um array de símbolos. 
Lembre que o próprio Object.getOwnPropertyNames() não contém as propriedades de símbolo de um objeto e somente as propriedades de string.

Como todos os objetos não possuem símbolos próprios inicialmente, o Object.getOwnPropertySymbols() retorna uma array vazia a menos que 
você tenha definido as propriedades de símbolo do seu objeto.

var obj = {};
var a = Symbol('a');
var b = Symbol.for('b');

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // retorno esperado 2
console.log(objectSymbols);        // retorno esperado (2) [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]);     // retorno esperado Symbol(a)
*/


// =======================
// =======================


// WELL KNOW SYMBOLS = props dos symbols

const obj = {
    [Symbol.iterator]() {
        
    }
}