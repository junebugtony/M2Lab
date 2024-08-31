import {sayHello} from '../js/main.js';

QUnit.module('sayHello', function() {

    QUnit.test('hello function triggers an alert with "Hello!"', function(assert) {
    
        const originalAlert = window.alert;
        let alertMessage = '';

        window.alert = function(message) {
            alertMessage = message;
        };

        sayHello();

        assert.equal(alertMessage, 'Hello!', 'sayHello should trigger an alert with the message "Hello!"');

        window.alert = originalAlert;
    });


});
