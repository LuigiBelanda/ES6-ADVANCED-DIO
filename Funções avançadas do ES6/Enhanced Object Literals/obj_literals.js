var obj = {
    prop1: 'Hello'
};


// =======================
// =======================


var prop2 = 'Hello';

var obj = {
    prop2: prop2
};

console.log(obj);


// =======================
// =======================


var prop3 = 'Hello';

var obj = {
    prop3 // podemos omitir a parte da direita 
};

console.log(obj);


// =======================
// =======================


function method1() {
    console.log('Method called');
}

var obj = {
    method1 
};

obj.method1();


// =======================
// =======================


var obj = {
    sum: function sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(5, 5));


// =======================
// =======================


var obj = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(5, 5));
console.log(obj);


// =======================
// =======================


var propName = 'Teste'; // nome da prop

var obj = {};

obj[propName] = 'Prop value'; // criando e dando nome para a prop

console.log(obj);


// =======================
// =======================


var propName = 'Teste2'; // nome da prop

var obj = {
    [propName] : 'Prop value2' // com o ECMA6 podemos criar o objeto e já dentro dela fazer a criação da prop e seu value, diferente do último exemplo onde tínhamos que criar o objeto e só depois criarmos a prop
}; 

console.log(obj);