const JWT = require('jsonwebtoken');
const {secret} = require('../config/index')

const generateToken = (newUser)=>{
    console.log("generate token: ", newUser)
    console.log(newUser.id);

    return JWT.sign({
        iss: 'fantacClub',
        sub: newUser.id,
        iat: new Date().getTime(),
        exp: Math.floor(Date.now() / 1000) + (60 * 2),
    }, secret)

}

module.exports = {
    generateToken   
};