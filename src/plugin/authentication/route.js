'use strict';

'use strict';

const Handler = require('./handler');

module.exports = [
    {
        method: 'POST',
        path: '/auth',
        handler: Handler.authenticate,
        config: {
            auth: {
                scope: ['Admin']
            }
        }
    }
];