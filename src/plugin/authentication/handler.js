'use strict';

const JWT = require('jsonwebtoken');
const Logger = global.requireConfig('logger/logger');
const Service = require('./service');
const BCrypt = require('bcrypt');

module.exports = {

    authenticate: async function (req, h) {

        let {username, password} = req.payload;

        return Service.getUser(username)
            .then((user) => {
                Logger.info(user);
                if (user != null) {
                    if (BCrypt.compare(password, user.password)) {

                        return 'token: ' + JWT.sign({
                                _id: user.id,
                            username: user.username,
                            scope: ['Admin']
                            },
                            process.env.secret);
                    }
                }

            }).catch((err) => Logger.info(err));
    }
};