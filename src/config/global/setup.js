'use strict';

const Path = require('path');
const srcPath = Path.dirname(process.mainModule.filename);


const validateModuleName = function (modulename) {

    if (!modulename) {
        throw new Error('Need to provide valid module name');
    }
    modulename = (modulename.startsWith('.')) ? modulename.substr(1, modulename.length) : modulename;
    modulename = (!modulename.startsWith('/')) ? '/' + modulename : modulename;
    return modulename;
};

global.requireConfig = function (moduleName) {

    return require(srcPath + '/config' + validateModuleName(moduleName));

};

global.requirePlugin = function (moduleName) {

    return require(srcPath + '/plugin' + validateModuleName(moduleName));

};

global.requireUtil = function (moduleName) {

    return require(srcPath + '/util' + validateModuleName(moduleName));

};
