const assert = require('assert');
const Math = require('../math') // pegando a classe de outro arquivo js

describe('Math class', function () {

    // hooks
    // beforeEach(function () {});

    beforeEach(function() {
        value = 0;
    });
    // antes de cada bloco it a var value tera seu valor atribuido como 0 novamente

    it('Sum two numbers', function (done) {
        const math = new Math();

        this.timeout(3000);
        // utilizanco functions podemos usar o this no escopo e definir um timeout maior que o permitido normalmente

        //assert.equal(math.sum(5, 5), 10);
        // a linha acima verifica se os dois valores passados e depois somados são iguais a um valor que queremos

        // throw new Error('Oh no!'); 
        // na linha acima nós podemos soltar um erro da maneira que quisermos

        /*
        try {
            assert.equal(math.sum(5, 5), 10);
        } catch (err) {
            console.log(err);
        }
        */
        // com as linhas acima podemos fazer nosso teste "passar" e ainda pegarmos o erro que ele der

        value = 5;

        math.sum(5, 5, (value) => {
            assert.equal(value, 10);
            done(); // com o done conseguimos testar codigos assincronos, pois o teste só terminará quando o done() for invocado
        });
    });

    it('Multiply two numbers', function() {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 25);
    });
    // podemos colocar testes de parte do projeto que ainda não fizemos, com isso o mocha irá mostrar que temos teste que ainda estão pendentes

    /*
    it.only('Multiply two numbers', function() {
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    });
    */
    // como o it.only podemos executar apenas 1 teste e pular todos os outros

    /*
    it.skip('Multiply two numbers', function() {
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    });
    */
    // como o it.skip podemos pular algum teste
});