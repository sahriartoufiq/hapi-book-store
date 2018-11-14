'use strict';

const Mongo = require('mongoose');
const Schema = Mongo.Schema;

const userSchema = new Schema({
        firstName: String,
        lastName: String,
        username: {
            type: String,
            index: true,
            unique: true
        },
        password: String,
        address: {
            district: String,
            thana: String,
            information: String
        }
    },
    {
        timeStamp: {
            createdAt: 'created_at'
        },
        autoIndex: false,
    });

userSchema.virtual('fullName').get(function () {

    return this.firstName + ' ' + this.lastName;
});

userSchema.set('toJSON', {
    getters: true, virtuals: false
});


module.exports = Mongo.model('User', userSchema);
