'use strict';

const Routes = require('./route');

module.exports = {
    pkg: require('./package.json'),
    register: async function (server, options) {
        server.route(Routes);
    }
};