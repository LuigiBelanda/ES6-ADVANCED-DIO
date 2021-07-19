// CALLBACKS

/*
EXPLICAÇÃO MDN:

Função Callback

Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar 
algum tipo de rotina ou ação.

EXPLICAÇÃO TRYBE:

Basicamente, callback é um tipo de função que só é executada após o processamento de outra função. Na linguagem JavaScript, quando uma 
função é passada como um argumento de outra, ela é, então, chamada de callback.
*/

function doSomething(callback) {
    setTimeout(function () {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        // did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    doSomething(function (data) {
        var processedData = data.split('');

        doOtherThing(function (data2) {
            var processedData2 = data2.split('');

            setTimeout(function () {
                console.log(processedData, processedData2)
            }, 1000);
        })
    });
}

doAll();

/*
Output:

[
  'F', 'i', 'r', 's',
  't', ' ', 'd', 'a',
  't', 'a'
] [
  'S', 'e', 'c', 'o',
  'n', 'd', ' ', 'd',
  'a', 't', 'a'
]
*/


// =======================
// =======================


// Se fossemos fazer o tratamento de erros em cada parte o código ficaria assim, CALLBACK HELL

function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');

            try {
                doOtherThing(function (data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2)
                        }, 1000);
                    } catch (err) {
                        // handle error 
                    }
                });
            } catch (err) {
                // handle error 
            }
        });
    } catch (err) {
        // handle error 
    }
}

doAll();