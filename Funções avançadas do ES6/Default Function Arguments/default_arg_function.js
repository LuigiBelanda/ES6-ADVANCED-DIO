function multiply(a, b) {
    return a * b;
};

console.log(multiply(2, 2)); // 4
console.log(multiply(2)); // NaN (2 * Undefined)


// =======================
// =======================


function multiply2(a, b) {
    b = b || 1; // Vai receber o parâmetro passado ou 1 (uma alternativa quando só passamos 1 parâmetro em vez de 2), mas quando queríamos multiplicar um número por 0 isso não funcionava
    
    return a * b;
};

console.log(multiply2(2)); // 2 (2 * 1)
console.log(multiply2(2, 0)); // 2 (2 * 1), aqui ele ainda será 2 poís no JS 0 é um entendido como 'false' então o segundo parâmetro cai na nossa condição e recebe 1


// =======================
// =======================


function multiply3(a, b) {
    b = typeof b === 'undefined' ? 1 : b; // se b não for undefined ele continua com seu valor, se não ele recebe 1 (mesmo assim esse código continua muito verboso)
    
    return a * b;
};

console.log(multiply3(2)); // 2 (2 * 1)
console.log(multiply3(2, 0)); // 0 (2 * 0)


// =======================
// =======================


function multiply4(a, b = 1) { // depois do ECMA6 podemos definir como valor padrão para 'b' = 1, assim resolvemos o problema anterior, isso funciona com todos os parâmetros
    return a * b;
};

console.log(multiply4(2)); // 2 (2 * 1)
console.log(multiply4(2, 0)); // 0 (2 * 0)
console.log(multiply4(2, 5)); // 10 (2 * 5)


// =======================
// =======================


function multiply5(a, b = a) { // podemos ainda passar como valor padrão o argumento 'a'
    return a * b;
};

console.log(multiply5(2)); // 2 (2 * 1)
console.log(multiply5(2, 0)); // 0 (2 * 0)
console.log(multiply5(2, 5)); // 10 (2 * 5)


// =======================
// =======================


// LAZY EVALUATION

function randomNumber() {
    console.log('Generating a random number...')
    return Math.random() * 10;
};


function multiply6(a, b = randomNumber()) { // podemos chamar uma função ainda em vez de passarmos um valor estático como nos exemplos anteriores
    return a * b;
};

console.log(multiply6(2)); // 2 * randomNumber
console.log(multiply6(2, 0)); // 2 * 0
console.log(multiply6(2, 5)); // 2 * 5
console.log(multiply6(5)); // 5 * randomNumber