/* DB MODEL */
const db = require('../database/models');


/* Public Controller */

const Categorys = async (req, res, next) => {
    try {
        const categorys = await db.Category.findAll();

        res.status(200).json({
            status: "OK",
            msg: "FOUND_CATEGORYS",
            endpoint: req.originalUrl,
            method: req.method,
            data: {
                type: "Categorys",
                categorys: categorys,
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "ERROR",
            msg: "NOT_FOUND_CATEGORYS",
            endpoint: req.originalUrl,
            method: req.method,
            data: error
        })
    }
}



module.exports ={
    Categorys
}