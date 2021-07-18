// Generators 

/*
Explicação MDN: 

Enquanto os iteradores são ferramentas muito úteis, sua criação requer um cuidado devido à necessidade de manter explícito seu estado 
interno. Generators provêm uma alternativa poderosa: eles te permitem definir um algoritmo iterativo escrevendo uma função simples que 
pode manter seu estado próprio.

Generator é um tipo especial de função que trabalha como uma factory para iteradores. A função vira um generator se ela contém uma ou 
mais expressões yield e se ela usa a sintaxe function*.

Geradores são funções cuja execução pode ser interrompida e posteriormente reconduzida. Seus contextos (de associações de variáveis) ficarão salvos entre cada recondução.
*/

function hello() {
    console.log('Hello');
    console.log('From');
    console.log('Function');
}

hello();

/*
Output:
Hello
From
Function
*/


// =======================
// =======================


// Podemos colocar um * na frente da palavra reservado function() = function* () {}
// Assim conseguimos pausar o código por um momento usando yield, para continuar a execução usamos o next()

/*
Explicação MDN:

A palavra-chave yield pausa a execução de uma generator function e o valor da expressão em frente a palavra-chave yield é retornado para 
a chamada do generator. Ele pode ser considerado uma versão da palavra-chave return para o generator.

A palavra-chave yield atualmente retorna um objeto do tipo IteratorResult com duas propriedades, value e done. A propriedade value é o 
resultado da avaliação da expressão yield, e done é false, indicando que a generator function não foi totalmente completada.

Uma vez pausado em uma expressão yield, a execução do código do generator permanece pausado até a próxima chamada do método next(). Cada 
vez que o método next() do generator é chamado, o generator resume a execução e roda até atingir um dos seguintes estados:
*/

function* hello() {
    console.log('Hello');
    yield;

    console.log('From');
    yield;

    console.log('Function');
}

console.log(hello());
// Output: Object [Generator] {}

const it = hello();

console.log(it.next());
/*
Output:
Hello
{ value: undefined, done: false }
*/

console.log(it.next());
/*
Output:
From
{ value: undefined, done: false }
*/

console.log(it.next());
/*
Output:
Function
{ value: undefined, done: true }
*/

// o valor de done acima é true pois ele terminou de iterar/executar todo o código


// =======================
// =======================


// Podemos notar que o value no exemplo anterior está vindo como undefined, mas podemos atribuir um valor a ela da seguinte forma

function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    yield 2;

    console.log('Function');
}

const it = hello();

console.log(it.next());
/*
Output:
Hello
{ value: 1, done: false }
*/

console.log(it.next());
/*
Output:
From
{ value: 2, done: false }
*/

console.log(it.next());
/*
Output:
Function
{ value: undefined, done: true }
*/


// =======================
// =======================


// Podemos ainda passar parâmetros para a função, isso ficara gravado no yield como veremos a seguir

function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log(value);
}

const it = hello();

console.log(it.next());
/*
Output:
Hello
{ value: 1, done: false }
*/

console.log(it.next());
/*
Output:
From
{ value: 2, done: false }
*/

console.log(it.next('Outside!'));
/*
Output:
Outside
{ value: undefined, done: true }
*/


// =======================
// =======================


function* naturalNumbers() {
    let number = 0;

    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/*
Output:
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
*/


// =======================
// =======================


// Podemos usar o generator para criar iteradores

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}

for (const value of obj) {
    console.log(value);
}

/*
Output:
1
2
3
4
*/