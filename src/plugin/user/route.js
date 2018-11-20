'use strict';

const Handler = require('./handler');
const Validator = require('./validators');

module.exports = [
    {
        method: 'POST',
        path: '/add/user',

        config: {
            auth: {
                scope: ['admin']
            },
            handler: Handler.addUser
        }
    },
    {
        method: 'GET',
        path: '/users',

        config: {
            auth: {
                scope: ['admin']
            },
            handler: Handler.listUser
        }
    },
    {
        method: 'POST',
        path: '/remove/user/{userId}',

        config: {
            auth: {
                scope: ['admin']
            },
            handler: Handler.removeUser
        }
    },
    {
        method: 'POST',
        path: '/edit/user/{userId}',
        config: {
            tags: ['api'],
            auth: {
                scope: ['admin']
            },
            handler: Handler.updateUser,
            validate: Validator.userUpdateValidation
        }
    }
];