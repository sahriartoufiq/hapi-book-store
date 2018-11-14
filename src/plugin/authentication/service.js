'use strict';

const User = global.requirePlugin('user/model/user');
const Logger = global.requireConfig('logger/logger');

module.exports = {

    getUser: function (username) {

        return User.findOne({username: username});

    }
};
