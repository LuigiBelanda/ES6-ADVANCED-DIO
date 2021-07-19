const simpleFunction = async () => {
    return 12345;
};

console.log(simpleFunction);
console.log(simpleFunction());

/* 
Output: 

[AsyncFunction: simpleFunction]
async () => {
    return 12345;
}

Promise {<fulfilled>: 12345}
*/


// =======================
// =======================


// Aqui estamos pegando valor da função que foi retornado na promise

console.log(simpleFunction().then(data => {
    console.log(data);
}));

// Output: 12345


// =======================
// =======================


// O tratamento de erros é do mesmo jeito que fazemos nos exemplo que fizemos nas promises

const simpleFunction2 = async () => {
    throw new Error('Oh no!');
    return 12345;
};

simpleFunction2().then(data => {
    console.log(data);
}).catch(err => {
    console.log('Erro: ', err);
});

/*
Output no console do browser:

Erro:  Error: Oh no!
    at simpleFunction2 (async.js:38)
    at async.js:42
*/