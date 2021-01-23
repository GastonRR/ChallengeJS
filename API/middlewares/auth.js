const services = require('../services')


// Authentication Middleware

function isAuth(req, res, next){
    if(!req.headers.authorization){

        return res.status(403).json({
            status: "ERROR",
            msg: "NO_AUTHORIZATION",
            endpoint: req.originalUrl,
            method: req.method
        })  
       
    }
    const token = req.headers.authorization.split(" ")[1];
    services.decodeToken(token)
    .then((response)=>{
        req.user = response
        next();
    })
    .catch((response)=>{
        res.status(response.status).json({message: response.message})
    })
}

module.exports = isAuth