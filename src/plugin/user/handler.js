'use strict';

const Logger = global.requireConfig('logger/logger');
const Service = require('./service');
const Boom = require('boom');

module.exports = {

    addUser: function (req, h) {

        return Service.saveUser(req.payload);

    }
};