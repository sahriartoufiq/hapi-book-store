'use strict';

require('./config/global/setup');

const Hapi = require('hapi');
const Logger = global.requireConfig('logger/logger');
const Profile = global.requireConfig('profile/setupProfile');
const DB = require('mongoose');

const server = Hapi.server({
    port: Profile.server.port
});

async function initiate() {

    DB.connect(Profile.db.connectionString, Profile.db.options)
        .then(() => console.log('connected to Mongo server')
            , console.log);

    // await server.register(global.requirePlugin('user'));
    // await server.register(global.requirePlugin('auth'));


    await server.register(global.requirePlugin('plugins'));

    await server.start();

    Logger.info('Server started ' + server.info.uri);

    process.on('unhandledRejection', (err) => {

        Logger.info(err);
        process.exit(1);
    });
}

module.exports = initiate;