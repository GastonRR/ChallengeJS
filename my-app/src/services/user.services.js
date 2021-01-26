import axios from "axios";
import authHeader from './auth-header'


const API_ACCOUNT_URL = "/api.account/"

const userServices = {
    
    getAccountContent: () =>{
        return axios.get(API_ACCOUNT_URL + '/balance', { headers: authHeader()})
    }
    
}

export default userServices