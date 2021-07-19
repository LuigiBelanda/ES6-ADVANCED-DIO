// AWAIT

// O operador await é utilizado para esperar por uma Promise. Ele pode ser usado apenas dentro de uma async function.

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 5000);
});

const simpleFunction = async () => {
    const data = await asyncTimer(); // aqui esperamos a promise acima terminar, isso demora 5 segundos por conta do time out, com isso pegamos o resolve da promise e usamos como argumento aqui
    return data;
};

simpleFunction().then(data => {
    console.log(data); // Output: 12345
}).catch(err => {
    console.log('Erro: ', err);
});


// =======================
// =======================


const asyncTimer2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 10000);
});

const simpleFunction2 = async () => {
    const data = await asyncTimer2();
    console.log(data);

    const dataJSON = await fetch('../../Fetch/data.json').then(resStream =>
        resStream.json()
    );

    return dataJSON; // estamos retornando os dados da requisição que fizemos acima do arquivo JSON
};

simpleFunction2().then(data => {
    console.log(data); // Output: {data: Array(3)}
}).catch(err => {
    console.log('Erro: ', err);
});


// =======================
// =======================


const asyncTimer3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 15000);
});

const simpleFunction3 = async () => {
    const data = await Promise.all([asyncTimer3(), fetch('../../Fetch/data.json').then(resStream => resStream.json())])
    // Acima usamos o Promise.all() para esperar a promise asyncTimer3() terminar e a requisição do arquivo JSON também, com isso passamos os dois retornos na const data e mostramos ela depois

    return data;
};

simpleFunction3().then(data => {
    console.log(data);
}).catch(err => {
    console.log('Erro: ', err);
});