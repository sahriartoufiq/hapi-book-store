'use strict';

const User = global.requirePlugin('user/model/user');
const BCrypt = require('bcrypt');
const Logger = global.requireConfig('logger/logger');

module.exports = {

    saveUser: function (user) {

        return user.password = BCrypt.hash(user.password, 10).then(function (hash) {

            user.password = hash;
            return User.create(user);
        });
    },
    listUser: function () {

        return User.find().exec();
    },
    removeUser: function (userId) {

        Logger.info('id: ' + userId);

        return User.findByIdAndDelete(userId).exec();
    },
    updateUser: function (userId, user) {

        Logger.info('id: ' + userId);

        return User.findByIdAndUpdate(userId, user).exec();
    }
};
