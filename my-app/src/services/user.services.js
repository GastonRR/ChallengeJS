import axios from "axios";
import authHeader from './auth-header'


const API_ACCOUNT_URL = "/api.account/"
const API_PUBLIC_URL = "/api.public/"

const userServices = {
    
    getAccountContent: () =>{
        return axios.get(API_ACCOUNT_URL + '/balance', { headers: authHeader()})
    },
    getCategorysContent: () =>{
        return axios.get(API_PUBLIC_URL + '/categorys')
    }
}

export default userServices