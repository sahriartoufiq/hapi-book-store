'use strict';

const HapiSwagger = require('hapi-swagger');
const Pack = require('package');

const swaggerOptions = {
    info: {
        title: 'Book-Store API Documentation',
        version: Pack.version,
    },
};

module.exports = [
    require('inert'),
    require('vision'),
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    },
    require('./auth'),
    require('./user')
];