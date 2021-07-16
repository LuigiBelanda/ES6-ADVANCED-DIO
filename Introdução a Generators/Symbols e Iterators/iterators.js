// WELL KNOW SYMBOLS = props dos symbols

/*
Explicação MDN:

O símbolo conhecido Symbol.iterator especifíca o iterador padrão para um objeto. Usado por for...of.
*/

const arr = [1, 2, 3, 4];

const iterator = arr[Symbol.iterator]();

console.log(iterator);
// Output: Object [Array Iterator] {} - retorna um objeto, para vermos o valor do array usamos o .next() para irmos passando índice por índice

console.log(iterator.next());
// Output: { value: 1, done: false }
console.log(iterator.next());
// Output: { value: 2, done: false }
console.log(iterator.next());
// Output: { value: 3, done: false }
console.log(iterator.next());
// Output: { value: 4, done: false }
console.log(iterator.next());
// Output: { value: undefined, done: true } - aqui temos done: true pois o array foi iterado inteiramente


// =======================
// =======================


const arr = [1, 2, 3, 4];

const iterator = arr[Symbol.iterator]();

while (true) {
    let { value, done } = iterator.next(); // sabemos que .next() retorna um objeto com 2 props, por isso estamos fazendo aqui o destructuring e colocando a primeira prop como value e a segundo como done

    if (done === true) {
        break
    }
    else {
        console.log(value);
    }
}

/*
Output:
1
2
3
4
*/


// =======================
// =======================


const arr = [1, 2, 3, 4];

for (const value of arr) {
    console.log(value);
}

/*
Output:
1
2
3
4
*/

/*
Explicação MDN sobre for of:
O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função 
personalizada com instruções a serem executadas para o valor de cada objeto distinto.
*/

const str = 'Digital Innovation One';

for (const value of str) {
    console.log(value);
}

/*
Output:
D
i
g
i
t
a
l
 
I
n
n
o
v
a
t
i
o
n
 
O
n
e
*/


// =======================
// =======================


const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

const iterator = obj[Symbol.iterator]()

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
Output:
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: undefined, done: true }
*/

// Com o código acima transformamos nosso objeto em um objeto iterável, com isso podemos usar o for of agora

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