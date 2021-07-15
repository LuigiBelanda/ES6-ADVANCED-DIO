// SEM USAR DESTRUCTURING

function sum(arr) {
    return arr[0] + arr[1];
}

console.log(sum([5, 5]));

/*
Output:
10 
*/


// USANDO DESTRUCTURING

function sum2([a, b] = []) {
    return a + b;
}

console.log(sum2([2, 2]));

/*
Output:
4 
*/


// ============================
// ============================


// USANDO DESTRUCTURING com DEFAULT VALUES

function sum3([a, b] = [1, 1]) {
    return a + b;
}

console.log(sum3()); // Como não passamos nenhum parâmetro a soma será 1 + 1

/*
Output:
2
*/