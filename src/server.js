'use strict';

require('./config/global/setup');

const Hapi = require('hapi');
//const Logger = global.requireConfig('logger/logger');
const activeProfile = global.requireConfig('profile/activateProfile');
const server = Hapi.server({
    port: activeProfile.server.port
});

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();


