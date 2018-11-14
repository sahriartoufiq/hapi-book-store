'use strict';

const User = global.requirePlugin('user/model/user');

module.exports = {

    saveUser: function (user) {
        return User.create(user);

    }
};
