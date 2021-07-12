// Function normal

function log(value) {
    console.log(value);
};

log('teste');


// =======================
// =======================


// Functions anônimas 

// Uma função anônima é uma função sem nome. Uma função anônima geralmente não está acessível após a sua criação.
// a função anônima não tem nome entre a palavra-chave function e os parênteses (). Como precisamos chamar a função anônima em algum momento, atribuímos essa função a uma variável.

var log = function (value) {
    console.log(value);
};

log('teste');

var sum = function (a, b) {
    return a + b;
};

console.log(sum(2, 2));