import axios from "axios"
import authHeader from './auth-header'

const API_URL = "/api.users/"
const API_ACCOUNT_URL = "/api.account/"
const API_OPERATIONS_URL = '/api.operations/'

const services ={
    register: (username, email, password) =>{
        return axios.post(API_URL + "SignIn",{
            username,
            email,
            password
        }).then((res) => {
            if(res.data.data.token){
                localStorage.setItem("Token",JSON.stringify(res.data.data.token))
            }
            return res.data.data
        });
    },
    logIn: ( email, password) =>{
        return axios.post(API_URL + "LogIn",{
            email,
            password
        }).then((res) => {
            if(res.data.data.token){
                localStorage.setItem("user",JSON.stringify(res.data.data))
            }
            return res.data.data
        })
    },
    logOut: () => {
        localStorage.removeItem("user");
    },
    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem("user"));
    },
    newBalance: (balance) => {
        const Token = JSON.parse(localStorage.getItem('Token'));
        return axios.post(API_ACCOUNT_URL + 'new/balance',{
            balance
        }, {
            headers: {
                Authorization: 'Bearer ' + Token
            }
        }).then(()=>{
            localStorage.removeItem("Token");
        });
    },
    BalanceUpdate: (balance) => {
        return axios.put(API_ACCOUNT_URL + 'update/balance',{
            balance
        }, { headers: authHeader()});
    },
    
    newOperation: (date, concept, amount, categorys,type) => {
        return axios.post(API_OPERATIONS_URL + `new/${type}`,{
            date,
            concept,
            amount,
            categorys
        }, { headers: authHeader()});
    },
    getAccountContent: () =>{
        return axios.get(API_ACCOUNT_URL + '/balance', { headers: authHeader()})
    }
   
}


export default services