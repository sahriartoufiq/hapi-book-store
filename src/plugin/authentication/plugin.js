'use strict';

const Route = require('./route');

const validate = async function (decoded, req) {
    /** TODO validation code **/
    return {
        isValid: true
    };
};

module.exports = {
    pkg: require('./package'),
    register: async function (server, options) {

        server.register(require('hapi-auth-jwt2'));

        server.auth.strategy('jwt', 'jwt', {
            key: 'secret!',
            validate: validate,
            verifyOptions: {algorithms: ['HS256']}
        });

        server.auth.default('jwt');

        server.route(Route);

    }
};