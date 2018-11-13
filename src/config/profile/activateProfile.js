const Const = global.requireConfig('profile/constant');
const activeProfile = Const.ENV.DEVELOPMENT;



module.exports = function () {

    return global.requireConfig('profile/activeProfile');

};
