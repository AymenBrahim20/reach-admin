/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
import http from "./AxiosContext";

const LoginAuth=(data) => { 
    return http.post("/auth/signin",data )
}
const getUser=(id ) => { 
    return http.get(`/user/${id}` ) 
}

const updateUser=(id , data ) => { 
    return http.put(`/user/${id}`, data ) 
}

const getLogout=(data)=>{
    return http.get("/auth/logout",data )
}

export default { 
    LoginAuth  , getUser,updateUser,getLogout
}
