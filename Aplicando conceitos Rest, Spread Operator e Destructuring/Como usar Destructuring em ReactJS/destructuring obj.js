var obj = {
    name: 'Luigi'
}

var name = obj.name;

console.log(name);

/*
Output:
Luigi
*/


// ============================
// ============================


var obj2 = {
    name: 'Lu'
}

var { name } = obj2; 
// segue praticamente o mesmo esquema dos arrays
// { name } definimos que queremos quebrar um objeto e neste caso pegar a prop name
// = obj2; indicamos de qual objeto queremos isso

console.log(name);

/*
Output:
Lu
*/


// ============================
// ============================


var obj3 = {
    name: 'Lu'
}

var { name: nomeDoObj } = obj3; 
// diferente do exemplo anterior neste caso estamos definindo uma var para guardar o valor da prop name
// neste caso a var é a nomeDoObj
// { prop_do_objeto: nome_da_var }

console.log(nomeDoObj);

/*
Output:
Lu
*/

// OBS: se mudarmos o valor da var nomeDoObj não mudamos o valor da prop do objeto


// ============================
// ============================


var obj4 = {
    name: 'Lu4',
    props: {
        age: 17
    }
}

// Sem usar destructuring:
var age = obj4.props.age;
console.log(age);

/* 
Output:
17
*/

// Usando destructuring:
var {props: { age }} = obj4; // podemos definir uma var para age sem guardada, igual nos exemplos anteriores
console.log(age);

/* 
Output:
17
*/


// ============================
// ============================


var obj5 = {
    name: 'Lu4',
    props: {
        age: 17,
        favColors: ['Black', 'Blue']
    }
}

var {props: { age, favColors: [color1, color2] }} = obj5; // aqui estamos fazendo o destructuring de um array que está dentro de um objeto que por sua vez esta dentro de outro objeto
console.log(age);
console.log(color1);
console.log(color2);

/*
Output:
17
Black
Blue
*/