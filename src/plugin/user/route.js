'use strict';

const Handler = require('./handler');

module.exports = [
    {
        method: 'POST',
        path: '/add/user',
        handler: Handler.addUser
    }
];