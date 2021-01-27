const { Account, Operation } = require('../database/models');

const moment = require('moment');


const getOperations = async (req, res, next) => {
    try {
        let type = req.params.op;
        if (type != undefined) {
            let operations = await Operation.findAll({
                where: {
                    idType: type
                }
            });
            return res.status(200).json({
                status: "OK",
                msg: "OPERATIONS_FOUND",
                endpoint: req.originalUrl,
                method: req.method,
                data: {
                    type: "Operation",
                    operations: operations
                }
            });
        }
        let operations = await Operation.findAll();

        res.status(200).json({
            status: "OK",
            msg: "OPERATIONS_FOUND",
            endpoint: req.originalUrl,
            method: req.method,
            data: {
                type: "Operation",
                operations: operations
            }
        });
    } catch (error) {
        res.status(404).json({
            status: "ERROR",
            msg: "OPERATIONS_NOT_FOUND",
            endpoint: req.originalUrl,
            method: req.method,
            data: error
        })
    }
}
const getDetailOperation = async (req, res, next) => {
    try {
        let id = req.params.id;
        let operations = await Operation.findOne({
            where: {
                id: id
            }
        });

        res.status(200).json({
            status: "OK",
            msg: "OPERATION_FOUND",
            endpoint: req.originalUrl,
            method: req.method,
            data: {
                type: "Operation",
                operations: operations
            }
        });
    } catch (error) {
        res.status(404).json({
            status: "ERROR",
            msg: "OPERATIONS_NOT_FOUND",
            endpoint: req.originalUrl,
            method: req.method,
            data: error
        })
    }
}

const newOperation = async (req, res, next) => {
    try {
        let type = req.params.type
        const account = await Account.findOne({
            where:{
                idUser: req.user
            }
        });

        const operation = await Operation.create({
            date: req.body.date,
            concept: req.body.concept,
            amount: req.body.amount,
            idType: type,
            idCategorys: req.body.categorys,
            idAccount: account.id
        })
        if(type !=1){
            var op = Number(account.balance) - Number(operation.amount);
        }else{
            var op = Number(account.balance) + Number(operation.amount);
        }
        const updateAccount = await Account.update({
            balance: op
        },{
            where: {
                idUser: req.user
            }
        });
        

        res.status(200).json({
            status: "OK",
            msg: "CORRECT_CREATION",
            endpoint: req.originalUrl,
            method: req.method,
            data: {
                type: "Operation",
                operation: operation
            }
        });
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
const editOperation = async (req, res, next) => {
    try {
       let idEdit = req.params.id
        const operation = await Operation.update({   
            concept: req.body.concept,
            amount: req.body.amount,
            idType: req.body.type,
            idCategory: req.body.Categorys
        },{
            where: {
                id: idEdit
            }
        });

        res.status(200).json({
            status: "OK",
            msg: "CORRECT_UPDATE",
            endpoint: req.originalUrl,
            method: req.method,
            data: {
                type: "Operation",
                operation: operation
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            msg: "INCORRECT_UPDATE",
            endpoint: req.originalUrl,
            method: req.method,
            data: error
        })
    }
}



module.exports = {
    getOperations,
    getDetailOperation,
    newOperation,
    editOperation
}