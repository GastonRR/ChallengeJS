/* DB MODEL Account */
const { Account } = require('../database/models');


/* Account Controller */

const getBalance = async (req, res, next) => {
    try {
        const account = await Account.findOne({
            where: {
                idUser: req.user
            }
        })
        res.status(200).json({
                    status: "OK",
                    msg: "BALANCE_FOUND",
                    endpoint: req.originalUrl,
                    method: req.method,
                    data: {
                        type: "account",
                        account:account
                    }
                })
    } catch (error) {
        res.status(404).json({
            status: "ERROR",
            msg: "BALANCE_NOT_FOUND",
            endpoint: req.originalUrl,
            method: req.method,
            data:error
        })
    }
  
}
const newBalance = async (req, res, next) => {
    try {
        const account = await Account.create({
            balance: req.body.balance,
            idUser: req.user
        });

        res.status(200).json({
                    status: "OK",
                    msg: "NEW_ACCOUNT_CREATE",
                    endpoint: req.originalUrl,
                    method: req.method,
                    data: {
                        type: "account",
                        account:account
                    }
                })
    } catch (error) {
        res.status(404).json({
            status: "ERROR",
            msg: "CREATE_ERROR",
            endpoint: req.originalUrl,
            method: req.method,
            data:error
        })
    }
}
const updateBalance = async (req, res, next) => {
    try {
        const account = await Account.update({
            balance: req.body.balance
        },{
            where: {
                idUser: req.user
            }
        });
        res.status(200).json({
                    status: "OK",
                    msg: "ACCOUNT_UPDATE",
                    endpoint: req.originalUrl,
                    method: req.method,
                    data: {
                        type: "account",
                        account:account
                    }
                })
    } catch (error) {
        res.status(404).json({
            status: "ERROR",
            msg: "UPDATE_ERROR",
            endpoint: req.originalUrl,
            method: req.method,
            data:error
        })
    }
}

module.exports = {
    getBalance,
    newBalance,
    updateBalance
}