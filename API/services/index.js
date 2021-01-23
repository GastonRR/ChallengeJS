const jwt = require('jwt-simple');
const moment = require('moment');

// functions JWT

//Create Token
function createToken(user){
    const payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(7, "days").unix(),
    }
    return jwt.encode(payload, process.env.SECRET_TOKEN);
}

// Decode Token
function decodeToken(token){
    const decoded = new Promise((resolve, reject)=>{
        try {
            
            const payload = jwt.decode(token,  process.env.SECRET_TOKEN);
            
            if (payload.exp < moment().unix()){
                reject({
                    status: 401,
                    message:"El Token ha expirado"
                });
            }
             resolve(payload.sub);
            
        } catch (error) {
            reject({
                status: 500,
                message: "Invalid Token"
            })
        }
    });
    return decoded;

}

module.exports = {
    createToken,
    decodeToken
}