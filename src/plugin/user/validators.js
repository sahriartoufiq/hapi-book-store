'use strict';

const Joi = require('joi');

module.exports = {

    userUpdateValidation: {


        // headers: {
        //     Authorization: Joi.string().max(200).required()
        // },
        params: {
            userId: Joi.string()
                .required()
                .description('users id')

        },
        payload: {
            username: Joi.string()
                .min(3)
                .required()
                .error(new Error('username should be greater than 3')),
            password: Joi.string()
                .min(6)
                .required()
                .error(new Error('password should be greater than 6'))
        }
    }
};