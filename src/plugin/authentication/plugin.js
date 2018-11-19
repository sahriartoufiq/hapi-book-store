'use strict';

require('./cryptoGenerator');
const Route = require('./route');
const JWT = require('hapi-auth-jwt2');
const validate = async function (decoded, req) {
    /** TODO validation code **/
    return {
        isValid: true
    };
};

module.exports = {
    pkg: require('./package'),
    register: async function (server, options, next) {

       await server.register(JWT);

       await server.auth.strategy('jwt', 'jwt', {
            key: process.env.secret,
            validate: validate,
            verifyOptions: {algorithms: ['HS256']}
        });

       await server.auth.default('jwt');

       await server.route(Route);

        next();

    }
};

