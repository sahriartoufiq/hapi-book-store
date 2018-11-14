'use strict';

const Const = global.requireConfig('profile/constant');
const activeProfile = process.env.activeProfile || Const.ENV.DEVELOPMENT;

module.exports = require('./' + activeProfile);


