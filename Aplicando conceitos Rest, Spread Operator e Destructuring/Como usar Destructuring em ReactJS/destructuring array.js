var arr1 = ['Maça', 'Banana', 'Laranja'];

var maca1 = arr1[0];
var banana1 = arr1[1];
var laranja1 = arr1[2];


// ============================
// ============================


// Destructuring Assignment
// A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

/*
EXEMPLO MDN

var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2

// ES2016 - não implementado em Firefox 47a01
({a, b, ...rest} = {a:1, b:2, c:3, d:4});
*/

var [maca2, banana2, laranja2] = ['Maça', 'Banana', 'Laranja']; 
// [maca, banana, laranja] definimos em quais variáveis queremos guardar cada item do nosso array
// ['Maça', 'Banana', 'Laranja']; aqui já passamos os itens do array

console.log(maca1);
console.log(banana1);
console.log(laranja1);

/* 
Output sem usar destructuring:
Maça
Banana
Laranja
*/

console.log(maca2);
console.log(banana2);
console.log(laranja2);

/* 
Output usando destructuring:
Maça
Banana
Laranja
*/


// ============================
// ============================


var [maca3, banana3, laranja3, [uva3]] = ['Maça', 'Banana', 'Laranja', ['Uva']]; 

console.log(uva3);

/* 
Output usando destructuring:
Uva
*/

var arr2 = ['Maça', 'Banana', 'Laranja', ['Uva']];

console.log(arr2[3][0]);

/* 
Output sem usar destructuring:
Uva
*/


// ============================
// ============================


// Quando a var não receber nenhum valor ela apenas retorna undefined

var [maca4, banana4, laranja4] = ['Maça', 'Banana']; 

console.log(maca4);
console.log(banana4);
console.log(laranja4); // neste caso existem apenas 2 indíces no array, então esta var não recebeu nenhum valor, ou seja, ela é undefined

/* 
Output:
Maça
Banana
undefined
*/
