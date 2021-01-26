import axios from "axios"

const API_URL = "/api.users/"
const API_ACCOUNT_URL = "/api.account/"

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
    }
   

}


export default services