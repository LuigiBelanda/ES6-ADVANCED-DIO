// EventEmitter

const EventEmitter = require('events');

const emitter = new EventEmitter();

// quando é emitido um evento ele vem pra cá 
emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', { user: 'Luigi Belanda' }) // emite o evento

// Output: { user: 'Luigi Belanda' }


// =======================
// =======================


const EventEmitter = require('events');

class Users extends EventEmitter {
    userLog() {
        this.emit('User logged', { user: 'Luigi2 Belanda2' })
    }
}

const emitter2 = new EventEmitter();

// quando é emitido um evento ele vem pra cá 
emitter2.on('User logged', data => {
    console.log(data);
});