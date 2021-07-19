const EventEmitter = require('events');

class Users extends EventEmitter {
    userLog(data) {
        this.emit('User logged', data)
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLog( { user: 'Luigi2 Belanda2' } )
users.userLog( { user: 'Luigi3 Belanda3' } )

// Output: { user: 'Luigi2 Belanda2' }
// Output: { user: 'Luigi3 Belanda3' }