// A sintaxe de rest parameter (parâmetros rest)  nos permite representar um número indefinido de argumentos como um array.

function sum(a, b) {
    return a + b;
}

console.log(sum(5, 5));


// =======================
// =======================


function sum(a, b) {
    console.log(arguments); // mostra todos os argumentos passados para função [Arguments] { '0': 5, '1': 5, '2': 5, '3': 2, '4': 3 }

    return a + b;
}

console.log(sum(5, 5, 5, 2, 3));


function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

console.log(sum(5, 5, 5, 2, 3));


// =======================
// =======================


// rest operator (...)

function sum(...args) {
    console.log(args); // [ 5, 5, 5, 2, 3 ], com o rest operator ele aceita vários valores, ele retorna um array ainda em vez de objeto igual o arguments
}

sum(5, 5, 5, 2, 3);


// =======================
// =======================


// rest operator (...)

function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0); // vai pegar cada argumento e somar eles
}

console.log(sum(5, 5, 5, 2, 3));


// =======================
// =======================


const sum = () => {
    console.log(arguments); // no caso das arrow functions o arguments não é definido, então conseguimos usá-lo, neste caso usamos o rest operator
}

sum(5, 5, 5, 2, 3);


// =======================
// =======================


const sum = (...rest) => {
    console.log(rest); // com rest operator conseguimos ver normalmente os parâmetros como comentado no exemplo anterior
}

sum(5, 5, 5, 2, 3);


// =======================
// =======================


const sum = (a , b, ...rest) => { // podemos usar o rest para pegar os valores em excesso/restante também
    console.log(a , b, rest); // output = 5 5 [ 5, 2, 3 ]
}

sum(5, 5, 5, 2, 3);

