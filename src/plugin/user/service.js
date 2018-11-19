'use strict';

const User = global.requirePlugin('user/model/user');
const BCrypt = require('bcrypt');

module.exports = {

    saveUser: function (user) {

        return user.password = BCrypt.hash(user.password, 10).then(function (hash) {

            user.password = hash;
            return User.create(user);
        });
    }
};
