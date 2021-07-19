// PROMISES

const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did other thing
        resolve('Second data');
    }, 1000);
});

console.log(doSomethingPromise); // Output: Promise { <pending> }

/*
Uma promise pode ter 3 estados:
- Pending (Em execução)
- Fulfilled (Terminou de executar)
- Rejected (Quando acontece algum erro)
*/

doSomethingPromise.then(data => console.log(data)); // Output: First data
doOtherThingPromise.then(data => console.log(data)); // Output: Second data


// =======================
// =======================


// Podemos ver oq a promise retorna quando temos um erro, igual no exemplo abaixo

const doSomethingPromise = new Promise((resolve, reject) => {
    throw new Error('Algo deu errado!');

    setTimeout(function () {
        // did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did other thing
        resolve('Second data');
    }, 1000);
});

doSomethingPromise.then(data => console.log(data)); // Output: (node:26020) UnhandledPromiseRejectionWarning: Error: Algo deu errado! - Neste caso esta promise não trará o valor que queremos, isso por que temos um erro, ou seja, ela foi rejeitada
doOtherThingPromise.then(data => console.log(data)); // Output: Second data

// Podemos tratar os erros com o catch


// =======================
// =======================


const doSomethingPromise = new Promise((resolve, reject) => {
    throw new Error('Algo deu errado!');

    setTimeout(function () {
        // did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did other thing
        resolve('Second data');
    }, 1000);
});

doSomethingPromise.then(data => console.log(data)).catch(error => (console.log(error))); // Output: Error: Algo deu errado!


// =======================
// =======================


const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did other thing
        resolve('Second data');
    }, 1000);
});

doSomethingPromise
    .then(data => doOtherThingPromise) // chamando a outra promise
        .then(data2 => console.log(data2)) // Output: Second data
    .catch();

// No exemplo acima chamamos uma promise e esta por sua vez chama a segunda promise, que retorna o valor mostrado acima no output


// =======================
// =======================


const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did other thing
        resolve('Second data');
    }, 1000);
});

doSomethingPromise
    .then(data => {console.log(data); return doOtherThingPromise;}) 
        .then(data2 => console.log(data2))
    .catch();

/*
Output:
First data
Second data
*/


// =======================
// =======================


// Criando funções que geram as promises

const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () =>new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('Second data');
    }, 1000);
});

doSomethingPromise()
    .then(data => {console.log(data); return doOtherThingPromise();}) 
        .then(data2 => console.log(data2))
    .catch();

/*
Output:
First data
Second data
*/


// =======================
// =======================


// Tratando o erro 

const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () =>new Promise((resolve, reject) => {
    throw new Error('Algo deu errado'); // erro na segunda promise

    setTimeout(function () {
        resolve('Second data');
    }, 1000);
});

doSomethingPromise()
    .then(data => {console.log(data); return doOtherThingPromise();}) 
        .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error)); // se qualquer erro ocorrer em uma das duas promises acima o catch irá pegar o erro 

/*
Output:
First data
Ops Error: Algo deu errado
*/


// =======================
// =======================


// Seguindo o exemplo anterior, se tivermos um erro na primeira promise a segunda não será executada

const doSomethingPromise = () => new Promise((resolve, reject) => {
    throw new Error('Algo deu errado'); // erro na primeira promise
    
    setTimeout(function () {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () =>new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('Second data');
    }, 1000);
});

doSomethingPromise()
    .then(data => {console.log(data); return doOtherThingPromise();}) 
        .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error));  

/*
Output:
Ops Error: Algo deu errado
*/


// =======================
// =======================


// Fazendo algo parecido com o exemplo no arquivo callbacks.js

const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () =>new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('Second data');
    }, 1000);
});

doSomethingPromise()
    .then(data => {
        console.log(data.split('')); 
        return doOtherThingPromise();
    }) 
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));  

/*
Output:
[
  'F', 'i', 'r', 's',
  't', ' ', 'd', 'a',
  't', 'a'
]
[
  'S', 'e', 'c', 'o',
  'n', 'd', ' ', 'd',
  'a', 't', 'a'
]
*/


// =======================
// =======================


// As promises no exemplo anterior ocorrem uma depois da outra, neste exemplo usando Promise.all conseguimos executar as promises em paralelo, neste caso o then só será chamado quando as duas promises terminarem

const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () =>new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('Second data');
    }, 1000);
});

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data); // Output: [ 'First data', 'Second data' ]
})


// =======================
// =======================


// Podemos usar o Promise.race(), mas diferente do all(), a promise que resolver primeiro será aquela que terá seu dado no catch

const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () =>new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('Second data');
    }, 1000);
});

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data); // Output: First data
})