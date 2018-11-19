const Crypto = require('crypto');
const secret = Crypto.randomBytes(256).toString('base64');

process.env['secret'] = secret;