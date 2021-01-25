/* DB MODEL USER */
const { User } = require('../database/models');
// library to encrypt password
const bcrypt = require('bcrypt');
// Json Web Token 
const service = require('../services'); 

/* Users Controllers */

const SignIn = async (req, res, next) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)

        });

        res.status(200).json({
            status: "OK",
            msg: "CORRECT_CREATION",
            endpoint: req.originalUrl,
            method: req.method,
            data: {
                type: "User",
                id: user.username,
                token: service.createToken(user),
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "ERROR",
            msg: "INCORRECT_CREATION",
            endpoint: req.originalUrl,
            method: req.method,
            data: error
        })
    }
}

const LogIn = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        const match = bcrypt.compareSync(req.body.password, user.password);
        if(!match){
            return res.status(403).json({
                status: "ERROR",
                msg: "INCORRECT_PASSWORD",
                endpoint: req.originalUrl,
                method: req.method,
            });
        }
        res.status(200).json({
            status: "OK",
            msg: "USER_LOGIN",
            endpoint: req.originalUrl,
            method: req.method,
            data: {
                type: "User",
                name: user.username,
                token: service.createToken(user)
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            msg: "SERVER_ERROR",
            endpoint: req.originalUrl,
            method: req.method,
            data: error
        })
    }

}

module.exports ={
    SignIn,
    LogIn
}