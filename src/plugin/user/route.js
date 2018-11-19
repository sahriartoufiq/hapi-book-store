'use strict';

const Handler = require('./handler');

module.exports = [
    {
        method: 'POST',
        path: '/add/user',

        config: {
            auth: {
                scope: [`admin`]
            },
            handler: Handler.addUser
        }


        // config: {
        //     auth: {
        //             scope: ['Admin']
        //
        //     },
        //     handler: Handler.addUser,
        // }
    }
];