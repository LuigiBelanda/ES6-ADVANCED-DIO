// A API fetch provê ao navegador uma interface para a execução de requisições HTTP através de Promises.

fetch('./data.json').then(responseStream => {
    console.log(responseStream);
});

/*
Output no console do browser:

Response {type: "basic", url: "http://127.0.0.1:5500/Promises%20e%20Fetch/Fetch,%20Async%20Await%20e%20EventEmitter/Fetch/data.json", redirected: false, status: 200, ok: true, …}
body: (...)
bodyUsed: false
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: "OK"
type: "basic"
url: "http://127.0.0.1:5500/Promises%20e%20Fetch/Fetch,%20Async%20Await%20e%20EventEmitter/Fetch/data.json"
__proto__: Response
*/


// =======================
// =======================


// Para pegar os dados do data.json devemos fazer o seguinte

fetch('./data.json').then(responseStream => {
    return responseStream.json().then(data => {
        console.log(data);
    });
});

/*
Output no console do browser:

data: (3) [1, 2, 3]
__proto__: Object
*/


// =======================
// =======================


// Se tivermos qualquer erro de rede nossa promise cairá no catch

fetch('https://localhost:8081/data.json').then(responseStream => {
    return responseStream.json().then(data => {
        console.log(data);
    });
}).catch(err => {
    console.log('Erro: ', err);
})

/*
Output no console do browser:

Erro:  TypeError: Failed to fetch
*/


// =======================
// =======================


// Neste caso temos um erro pois não temos o arquivo requisitado, no caso o fetch só dará um erro realmente caso ocorra algum erro de rede

fetch('./dataXPTO.json').then(responseStream => {
    return responseStream.json().then(data => {
        console.log(data);
    });
}).catch(err => {
    console.log('Erro: ', err);
})

/*
Output no console do browser:

Erro:  SyntaxError: Unexpected token < in JSON at position 0
*/


// =======================
// =======================


// Aqui verificamos se o status http é 200

fetch('./dat2a.json')
    .then(responseStream => {

        console.log('VERIFICANDO O STATUS DO RESPONSESTREAM');
        console.log(responseStream);
        console.log(responseStream.status, 'STATUS DA CHAMADA'); // Output: 200 "STATUS DA CHAMADA"

        if (responseStream.status === 200) {
            return responseStream.json()
                .then(data => {
                    console.log('STATUS 200 OK');
                    console.log(data);
                });
        } else {
            throw new Error('Request Error');
        }
    }).catch(err => {
        console.log('Erro: ', err);  // Output se tiver erro:  Error: Request Error
    })


// Por padrão o método da requisição d fetch é GET, mas podemos mudar isso e usar o POST