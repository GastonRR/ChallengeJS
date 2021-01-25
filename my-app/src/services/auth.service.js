import axios from "axios"

const API_URL = "api.users/"

const services ={
    register: (username, email, password) =>{
        return axios.post(API_URL + "SignIn",{
            username,
            email,
            password
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
    cgetCurrentUser: () => {
        return JSON.parse(localStorage.getItem("user"));
    },
   

}

// const logIn = ( email, password) =>{
//     return axios.post(API_URL + "LogIn",{
//         email,
//         password
//     }).then((res) => {
//         if(res.data.token){
//             localStorage.setItem("user",JSON.stringify(res.data))
//         }
//         return res.data
//     });
// }
// const logOut = () => {
//     localStorage.removeItem("user");
// };

// const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem("user"));
// };

export default services