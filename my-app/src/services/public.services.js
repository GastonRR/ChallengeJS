import axios from "axios";


const API_PUBLIC_URL = "/api.public/"

const userServices = {
    
    getCategorysContent: () =>{
        return axios.get(API_PUBLIC_URL + '/categorys')
    }
}

export default userServices