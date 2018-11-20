'use strict';

const Logger = global.requireConfig('logger/logger');
const Service = require('./service');
const Boom = require('boom');

module.exports = {

    addUser: function (req, h) {

        return Service.saveUser(req.payload)
            .then((user) => user)
            .catch((err) => Boom.boomify(err));

    },
    listUser: function (req, h) {

        return Service.listUser()
            .then(function (users) {

                Logger.info(users);

                return {
                    message: 'success',
                    users: users
                };

            }).catch((err) => Boom.boomify((err)));

    },
    removeUser: function (req, h) {

        Logger.info(req.params.userId);

        return Service.removeUser(req.params.userId)
            .then(
                function () {
                    return {
                        message: 'success'
                    };
                }).catch(function (err) {

                Logger.info(err);

                return Boom.boomify(err);
            });
    },
    updateUser: function (req, h) {

        Logger.info(req.params.userId);

        return Service.updateUser(req.params.userId, req.payload)
            .then(
                function () {
                    return {
                        message: 'success'
                    };
                }).catch(function (err) {

                Logger.info(err);

                return Boom.boomify(err);
            });
    }
};