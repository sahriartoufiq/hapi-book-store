'use strict';

const JWT = require('jsonwebtoken');
const Logger = global.requireConfig('logger/logger');
const Service = require('./service');
const Boom = require('boom');

module.exports = {

    authenticate: async function (req, h) {

        let {username, password} = req.payload;

        Service.getUser(username)
            .then((user) => {
                //
                // Logger.info(user);
                //
                // return {
                //     message: 'success'
                // }

                if (user.password == password) {
                    return 'token: ' + JWT.sign(user.id,
                        'secret!');
                }
            }).catch((err) => Logger.info(err));
    }
};

